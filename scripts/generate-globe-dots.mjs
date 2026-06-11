/**
 * generate-globe-dots.mjs — one-shot generator for the dotted-landmass
 * point set used by the World Cup 3D globe
 * (src/app/worldcup/three/globe-dots.json).
 *
 * Usage (run once, commit the JSON output):
 *   node scripts/generate-globe-dots.mjs
 *   # or, behind a proxy that breaks node fetch:
 *   curl -fsSL https://unpkg.com/world-atlas@2/land-110m.json -o /tmp/land-110m.json
 *   node scripts/generate-globe-dots.mjs /tmp/land-110m.json
 *
 * What it does:
 *  1. Fetches the public-domain Natural Earth 1:110m land topology
 *     from the world-atlas package (https://unpkg.com/world-atlas@2/
 *     land-110m.json — Natural Earth data, public domain).
 *  2. Decodes the TopoJSON inline (delta-decoded quantized arcs) so we
 *     need zero runtime/dev dependencies.
 *  3. Samples a latitude/longitude grid (LAT_STEP degrees of latitude;
 *     longitude step widened by 1/cos(lat) so dot density stays
 *     roughly uniform on the sphere instead of bunching at the poles)
 *     and keeps points that fall on land (even-odd ray casting against
 *     every polygon ring, with bounding-box prefilter).
 *  4. Writes a compact JSON array of [lat, lon] pairs (2-decimal
 *     precision, ~1 km — far below dot size on screen).
 *
 * Latitude is clamped to [-60, 84]: this trims Antarctica (which the
 * camera never frames and which would add ~25% more points) and the
 * empty polar cap, matching the usual "GitHub globe" aesthetic.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const TOPO_URL = 'https://unpkg.com/world-atlas@2/land-110m.json'
const OUT_PATH = join(
    dirname(fileURLToPath(import.meta.url)),
    '..',
    'src/app/worldcup/three/globe-dots.json'
)

const LAT_STEP = 1.8 // degrees between latitude rows
const LAT_MIN = -60
const LAT_MAX = 84

// --- minimal TopoJSON decoding (only what land-110m needs) -----------------

/** Delta-decode one quantized arc into absolute [lon, lat] points. */
function decodeArc(topo, arc) {
    const [sx, sy] = topo.transform.scale
    const [tx, ty] = topo.transform.translate
    let x = 0
    let y = 0
    return arc.map(([dx, dy]) => {
        x += dx
        y += dy
        return [x * sx + tx, y * sy + ty]
    })
}

/** Stitch a ring (list of arc indices; ~i means arc i reversed). */
function ringPoints(topo, decodedArcs, ring) {
    const pts = []
    for (const idx of ring) {
        const arc =
            idx >= 0 ? decodedArcs[idx] : [...decodedArcs[~idx]].reverse()
        // Per the TopoJSON spec, consecutive arcs share an endpoint —
        // drop the duplicated first point of every arc after the first.
        for (let i = pts.length > 0 ? 1 : 0; i < arc.length; i++) {
            pts.push(arc[i])
        }
    }
    return pts
}

// --- point-in-land test -----------------------------------------------------

/** Even-odd ray cast of [lon, lat] against one ring. */
function crossesRing(lon, lat, ring) {
    let inside = false
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i]
        const [xj, yj] = ring[j]
        if (
            yi > lat !== yj > lat &&
            lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi
        ) {
            inside = !inside
        }
    }
    return inside
}

async function loadTopology() {
    const localPath = process.argv[2]
    if (localPath) {
        console.log(`reading ${localPath} ...`)
        return JSON.parse(readFileSync(localPath, 'utf8'))
    }
    console.log(`fetching ${TOPO_URL} ...`)
    const res = await fetch(TOPO_URL)
    if (!res.ok) throw new Error(`fetch failed: HTTP ${res.status}`)
    return res.json()
}

async function main() {
    const topo = await loadTopology()

    const decodedArcs = topo.arcs.map((a) => decodeArc(topo, a))
    // objects.land is a GeometryCollection holding a single
    // MultiPolygon in world-atlas@2 (plain MultiPolygon in older
    // builds) — accept both.
    let land = topo.objects.land
    if (land.type === 'GeometryCollection') land = land.geometries[0]
    if (land.type !== 'MultiPolygon') {
        throw new Error(`unexpected geometry type: ${land.type}`)
    }

    // Flatten every ring (outer rings and holes alike): the even-odd
    // rule over the full ring set handles holes correctly.
    const rings = []
    for (const polygon of land.arcs) {
        for (const ringIdx of polygon) {
            const pts = ringPoints(topo, decodedArcs, ringIdx)
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
            for (const [x, y] of pts) {
                if (x < minX) minX = x
                if (x > maxX) maxX = x
                if (y < minY) minY = y
                if (y > maxY) maxY = y
            }
            rings.push({ pts, minX, minY, maxX, maxY })
        }
    }
    console.log(`decoded ${rings.length} land rings`)

    function onLand(lon, lat) {
        let inside = false
        for (const r of rings) {
            if (lon < r.minX || lon > r.maxX || lat < r.minY || lat > r.maxY) {
                continue
            }
            if (crossesRing(lon, lat, r.pts)) inside = !inside
        }
        return inside
    }

    const dots = []
    for (let lat = LAT_MIN + LAT_STEP / 2; lat <= LAT_MAX; lat += LAT_STEP) {
        // Widen the longitude step toward the poles for even density.
        const lonStep = LAT_STEP / Math.max(Math.cos((lat * Math.PI) / 180), 0.05)
        for (let lon = -180 + lonStep / 2; lon < 180; lon += lonStep) {
            if (onLand(lon, lat)) {
                dots.push([
                    Math.round(lat * 100) / 100,
                    Math.round(lon * 100) / 100,
                ])
            }
        }
    }

    const json = JSON.stringify(dots)
    writeFileSync(OUT_PATH, json)
    console.log(
        `wrote ${dots.length} dots (${(json.length / 1024).toFixed(1)} KB) -> ${OUT_PATH}`
    )
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
