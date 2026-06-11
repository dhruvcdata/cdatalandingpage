'use client'

/**
 * WorldCupGlobe — premium dotted 3D globe for the World Cup 2026 data
 * page. GitHub-globe style: dotted landmasses, fresnel atmosphere rim,
 * pulsing stadium markers for the 16 host venues, animated
 * great-circle travel arcs (real fixture data via
 * @/lib/worldcup/journeys), sparse ambient particle field.
 *
 * Designed to be dynamically imported with `ssr: false` — no window /
 * document access at module scope. Performance contract:
 *  - dpr capped at [1, 1.75]
 *  - frameloop 'always' only while on screen (IntersectionObserver),
 *    'demand' otherwise
 *  - prefers-reduced-motion → static frame (no idle rotation, no
 *    pulsing, frameloop 'demand')
 *  - all hand-built geometries disposed on unmount (JSX-declared
 *    materials/geometries are disposed by R3F itself)
 *
 * The scrollProgress prop (0..1) drives a damped camera path:
 *   0   → wide framing on North America
 *   0.5 → closer, lower angle
 *   1   → pulled back while the whole scene fades out (CSS opacity on
 *         the wrapper, so the fade costs nothing on the GPU)
 */

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
    Suspense,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react'
import * as THREE from 'three'
import type { GlobeArc, GlobeMarker } from '@/lib/worldcup/journeys'
import dotsData from './globe-dots.json'

// ---------------------------------------------------------------------------
// Props contract
// ---------------------------------------------------------------------------

export type WorldCupGlobeProps = {
    /** The 16 host-stadium markers (see venueMarkers() in journeys.ts) */
    markers: GlobeMarker[]
    /** Team travel arcs (see computeTravelArcs() in journeys.ts) */
    arcs: GlobeArc[]
    /**
     * Scroll progress 0..1 driving the camera: 0 wide North America,
     * ~0.5 close/low angle, 1 pulled back + faded out. Default 0.
     */
    scrollProgress?: number
    /** Class for the wrapper div (give it a height) */
    className?: string
}

// ---------------------------------------------------------------------------
// Shared math / constants
// ---------------------------------------------------------------------------

const GLOBE_RADIUS = 1
const DEG = Math.PI / 180

/** Brand palette */
const DOT_COLOR = '#38bdf8' // landmass dots — cyan
const ATMOSPHERE_COLOR = '#3b82f6' // rim glow — brand blue
const MARKER_COLOR = '#fbbf24' // stadiums — gold
const ARC_COLOR = '#7dd3fc' // travel arcs — light cyan
const PARTICLE_COLOR = '#60a5fa'

/** lat/lon (degrees) → position on a sphere of radius r. */
function latLonToVec3(lat: number, lon: number, r: number): THREE.Vector3 {
    const la = lat * DEG
    const lo = lon * DEG
    return new THREE.Vector3(
        r * Math.cos(la) * Math.cos(lo),
        r * Math.sin(la),
        -r * Math.cos(la) * Math.sin(lo)
    )
}

/** Spherical interpolation between two unit vectors. */
function slerpUnit(a: THREE.Vector3, b: THREE.Vector3, t: number): THREE.Vector3 {
    const angle = a.angleTo(b)
    if (angle < 1e-6) return a.clone()
    const sin = Math.sin(angle)
    return a
        .clone()
        .multiplyScalar(Math.sin((1 - t) * angle) / sin)
        .addScaledVector(b, Math.sin(t * angle) / sin)
        .normalize()
}

/** Dispose a memoized geometry when the owning component unmounts. */
function useDisposable<T extends { dispose(): void }>(obj: T): T {
    useEffect(() => () => obj.dispose(), [obj])
    return obj
}

// ---------------------------------------------------------------------------
// Dotted landmasses
// ---------------------------------------------------------------------------

const DOT_VERTEX = /* glsl */ `
    uniform float uSize;
    void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = uSize / -mv.z;
        gl_Position = projectionMatrix * mv;
    }
`

const DOT_FRAGMENT = /* glsl */ `
    uniform vec3 uColor;
    uniform float uOpacity;
    void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.16, d) * uOpacity;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, a);
    }
`

function GlobeDots() {
    const gl = useThree((s) => s.gl)

    const geometry = useDisposable(
        useMemo(() => {
            const dots = dotsData as [number, number][]
            const positions = new Float32Array(dots.length * 3)
            for (let i = 0; i < dots.length; i++) {
                const v = latLonToVec3(dots[i][0], dots[i][1], GLOBE_RADIUS)
                positions[i * 3] = v.x
                positions[i * 3 + 1] = v.y
                positions[i * 3 + 2] = v.z
            }
            const g = new THREE.BufferGeometry()
            g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            return g
        }, [])
    )

    const uniforms = useMemo(
        () => ({
            uSize: { value: 5.2 * gl.getPixelRatio() },
            uColor: { value: new THREE.Color(DOT_COLOR) },
            uOpacity: { value: 0.85 },
        }),
        [gl]
    )

    return (
        <points geometry={geometry}>
            <shaderMaterial
                vertexShader={DOT_VERTEX}
                fragmentShader={DOT_FRAGMENT}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

/** Dark occluder so far-side dots/arcs are hidden behind the planet. */
function InnerSphere() {
    return (
        <mesh>
            <sphereGeometry args={[GLOBE_RADIUS * 0.99, 48, 48]} />
            <meshBasicMaterial color="#050b1c" />
        </mesh>
    )
}

// ---------------------------------------------------------------------------
// Atmosphere rim glow (fresnel on a back-side shell — fake bloom, no
// postprocessing dependency)
// ---------------------------------------------------------------------------

const ATMO_VERTEX = /* glsl */ `
    varying vec3 vNormal;
    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

const ATMO_FRAGMENT = /* glsl */ `
    uniform vec3 uColor;
    varying vec3 vNormal;
    void main() {
        float intensity = pow(0.62 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
        gl_FragColor = vec4(uColor, 1.0) * intensity;
    }
`

function Atmosphere() {
    const uniforms = useMemo(
        () => ({ uColor: { value: new THREE.Color(ATMOSPHERE_COLOR) } }),
        []
    )
    return (
        <mesh scale={1.18}>
            <sphereGeometry args={[GLOBE_RADIUS, 48, 48]} />
            <shaderMaterial
                vertexShader={ATMO_VERTEX}
                fragmentShader={ATMO_FRAGMENT}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                side={THREE.BackSide}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    )
}

// ---------------------------------------------------------------------------
// Stadium markers — glowing, pulsing points
// ---------------------------------------------------------------------------

const MARKER_VERTEX = /* glsl */ `
    attribute float aPhase;
    uniform float uTime;
    uniform float uSize;
    varying float vPulse;
    void main() {
        vPulse = 0.55 + 0.45 * sin(uTime * 2.4 + aPhase);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = uSize * (0.75 + 0.45 * vPulse) / -mv.z;
        gl_Position = projectionMatrix * mv;
    }
`

const MARKER_FRAGMENT = /* glsl */ `
    uniform vec3 uColor;
    varying float vPulse;
    void main() {
        float d = length(gl_PointCoord - 0.5) * 2.0;
        float core = smoothstep(0.32, 0.0, d);
        float halo = exp(-d * 3.2) * (0.30 + 0.45 * vPulse);
        float a = core + halo;
        if (a < 0.01) discard;
        vec3 col = mix(uColor, vec3(1.0), core * 0.7);
        gl_FragColor = vec4(col, a);
    }
`

function StadiumMarkers({
    markers,
    reducedMotion,
}: {
    markers: GlobeMarker[]
    reducedMotion: boolean
}) {
    const gl = useThree((s) => s.gl)
    const materialRef = useRef<THREE.ShaderMaterial>(null)

    const geometry = useDisposable(
        useMemo(() => {
            const positions = new Float32Array(markers.length * 3)
            const phases = new Float32Array(markers.length)
            markers.forEach((m, i) => {
                const v = latLonToVec3(m.lat, m.lon, GLOBE_RADIUS * 1.012)
                positions[i * 3] = v.x
                positions[i * 3 + 1] = v.y
                positions[i * 3 + 2] = v.z
                phases[i] = i * 1.7
            })
            const g = new THREE.BufferGeometry()
            g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            g.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1))
            return g
        }, [markers])
    )

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uSize: { value: 46 * gl.getPixelRatio() },
            uColor: { value: new THREE.Color(MARKER_COLOR) },
        }),
        [gl]
    )

    useFrame((state) => {
        if (!reducedMotion && materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
        }
    })

    return (
        <points geometry={geometry}>
            <shaderMaterial
                ref={materialRef}
                vertexShader={MARKER_VERTEX}
                fragmentShader={MARKER_FRAGMENT}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    )
}

// ---------------------------------------------------------------------------
// Travel arcs — single merged LineSegments with a travelling "comet"
// pulse per arc (one draw call for all arcs)
// ---------------------------------------------------------------------------

const ARC_SEGMENTS = 48

const ARC_VERTEX = /* glsl */ `
    attribute float aT;
    attribute float aOffset;
    varying float vT;
    varying float vOffset;
    void main() {
        vT = aT;
        vOffset = aOffset;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`

const ARC_FRAGMENT = /* glsl */ `
    uniform float uTime;
    uniform vec3 uColor;
    varying float vT;
    varying float vOffset;
    void main() {
        // Travelling comet head with exponential trail (wraps smoothly).
        float head = fract(uTime * 0.13 + vOffset);
        float dist = fract(head - vT);
        float comet = exp(-dist * 9.0);
        // Fade the arc in/out near its endpoints.
        float endFade = smoothstep(0.0, 0.10, vT) * smoothstep(1.0, 0.90, vT);
        float a = (0.10 + 0.9 * comet) * endFade;
        if (a < 0.01) discard;
        gl_FragColor = vec4(uColor, a);
    }
`

function TravelArcs({
    arcs,
    reducedMotion,
}: {
    arcs: GlobeArc[]
    reducedMotion: boolean
}) {
    const materialRef = useRef<THREE.ShaderMaterial>(null)

    const geometry = useDisposable(
        useMemo(() => {
            const vertsPerArc = ARC_SEGMENTS * 2 // line segment pairs
            const positions = new Float32Array(arcs.length * vertsPerArc * 3)
            const ts = new Float32Array(arcs.length * vertsPerArc)
            const offsets = new Float32Array(arcs.length * vertsPerArc)

            let v = 0
            arcs.forEach((arc, arcIndex) => {
                const a = latLonToVec3(arc.from.lat, arc.from.lon, 1)
                const b = latLonToVec3(arc.to.lat, arc.to.lon, 1)
                const angle = a.angleTo(b)
                // Higher arcs for longer journeys.
                const altitude = 0.10 + 0.35 * (angle / Math.PI)
                const offset = (arcIndex * 0.37) % 1

                const pointAt = (t: number) => {
                    const r =
                        GLOBE_RADIUS * 1.012 +
                        altitude * Math.sin(Math.PI * t)
                    return slerpUnit(a, b, t).multiplyScalar(r)
                }

                let prev = pointAt(0)
                for (let i = 1; i <= ARC_SEGMENTS; i++) {
                    const t = i / ARC_SEGMENTS
                    const curr = pointAt(t)
                    const tPrev = (i - 1) / ARC_SEGMENTS
                    // segment start
                    positions[v * 3] = prev.x
                    positions[v * 3 + 1] = prev.y
                    positions[v * 3 + 2] = prev.z
                    ts[v] = tPrev
                    offsets[v] = offset
                    v++
                    // segment end
                    positions[v * 3] = curr.x
                    positions[v * 3 + 1] = curr.y
                    positions[v * 3 + 2] = curr.z
                    ts[v] = t
                    offsets[v] = offset
                    v++
                    prev = curr
                }
            })

            const g = new THREE.BufferGeometry()
            g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            g.setAttribute('aT', new THREE.BufferAttribute(ts, 1))
            g.setAttribute('aOffset', new THREE.BufferAttribute(offsets, 1))
            return g
        }, [arcs])
    )

    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uColor: { value: new THREE.Color(ARC_COLOR) },
        }),
        []
    )

    useFrame((state) => {
        if (!reducedMotion && materialRef.current) {
            materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime()
        }
    })

    if (arcs.length === 0) return null

    return (
        <lineSegments geometry={geometry}>
            <shaderMaterial
                ref={materialRef}
                vertexShader={ARC_VERTEX}
                fragmentShader={ARC_FRAGMENT}
                uniforms={uniforms}
                transparent
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </lineSegments>
    )
}

// ---------------------------------------------------------------------------
// Sparse ambient particle field
// ---------------------------------------------------------------------------

const PARTICLE_COUNT = 320

function AmbientParticles({ reducedMotion }: { reducedMotion: boolean }) {
    const gl = useThree((s) => s.gl)
    const groupRef = useRef<THREE.Group>(null)

    const geometry = useDisposable(
        useMemo(() => {
            const positions = new Float32Array(PARTICLE_COUNT * 3)
            // Deterministic pseudo-random shell so SSR/CSR or remounts agree.
            let seed = 42
            const rand = () => {
                seed = (seed * 16807) % 2147483647
                return seed / 2147483647
            }
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                const r = 1.7 + rand() * 1.6
                const theta = rand() * Math.PI * 2
                const cosPhi = rand() * 2 - 1
                const sinPhi = Math.sqrt(1 - cosPhi * cosPhi)
                positions[i * 3] = r * sinPhi * Math.cos(theta)
                positions[i * 3 + 1] = r * cosPhi
                positions[i * 3 + 2] = r * sinPhi * Math.sin(theta)
            }
            const g = new THREE.BufferGeometry()
            g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
            return g
        }, [])
    )

    const uniforms = useMemo(
        () => ({
            uSize: { value: 3.4 * gl.getPixelRatio() },
            uColor: { value: new THREE.Color(PARTICLE_COLOR) },
            uOpacity: { value: 0.35 },
        }),
        [gl]
    )

    useFrame((_, delta) => {
        if (!reducedMotion && groupRef.current) {
            groupRef.current.rotation.y += delta * 0.008
        }
    })

    return (
        <group ref={groupRef}>
            <points geometry={geometry}>
                <shaderMaterial
                    vertexShader={DOT_VERTEX}
                    fragmentShader={DOT_FRAGMENT}
                    uniforms={uniforms}
                    transparent
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </group>
    )
}

// ---------------------------------------------------------------------------
// Camera rig — scroll keyframes + slow idle drift, critically damped
// ---------------------------------------------------------------------------

type CameraKey = { distance: number; lat: number; lon: number }

/** 0 → wide North America, 0.5 → close & low, 1 → pulled back. */
const CAMERA_KEYS: readonly CameraKey[] = [
    { distance: 3.15, lat: 38, lon: -95 },
    { distance: 2.3, lat: 16, lon: -101 },
    { distance: 4.5, lat: 32, lon: -88 },
]

function sampleCameraKeys(p: number): CameraKey {
    const clamped = Math.min(1, Math.max(0, p))
    const scaled = clamped * (CAMERA_KEYS.length - 1)
    const i = Math.min(Math.floor(scaled), CAMERA_KEYS.length - 2)
    const t = scaled - i
    const a = CAMERA_KEYS[i]
    const b = CAMERA_KEYS[i + 1]
    return {
        distance: a.distance + (b.distance - a.distance) * t,
        lat: a.lat + (b.lat - a.lat) * t,
        lon: a.lon + (b.lon - a.lon) * t,
    }
}

const INITIAL_CAMERA = latLonToVec3(
    CAMERA_KEYS[0].lat,
    CAMERA_KEYS[0].lon,
    CAMERA_KEYS[0].distance
)

/** Idle rotation speed in degrees of longitude per second. */
const IDLE_DRIFT_DEG_PER_S = 1.9

function CameraRig({
    scrollRef,
    reducedMotion,
}: {
    scrollRef: React.MutableRefObject<number>
    reducedMotion: boolean
}) {
    const target = useMemo(() => new THREE.Vector3(), [])

    useFrame((state, delta) => {
        const key = sampleCameraKeys(scrollRef.current)
        const drift = reducedMotion
            ? 0
            : state.clock.getElapsedTime() * IDLE_DRIFT_DEG_PER_S
        target.copy(latLonToVec3(key.lat, key.lon - drift, key.distance))

        const cam = state.camera
        if (reducedMotion) {
            cam.position.copy(target)
        } else {
            const lambda = 3.2
            cam.position.set(
                THREE.MathUtils.damp(cam.position.x, target.x, lambda, delta),
                THREE.MathUtils.damp(cam.position.y, target.y, lambda, delta),
                THREE.MathUtils.damp(cam.position.z, target.z, lambda, delta)
            )
        }
        cam.lookAt(0, 0, 0)
    })

    return null
}

// ---------------------------------------------------------------------------
// Public component
// ---------------------------------------------------------------------------

export default function WorldCupGlobe({
    markers,
    arcs,
    scrollProgress = 0,
    className = '',
}: WorldCupGlobeProps) {
    const wrapperRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef(scrollProgress)
    const [visible, setVisible] = useState(true)
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        scrollRef.current = scrollProgress
    }, [scrollProgress])

    // Pause the render loop entirely while off screen.
    useEffect(() => {
        const el = wrapperRef.current
        if (!el || typeof IntersectionObserver === 'undefined') return
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { rootMargin: '120px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    // Static frame for users who prefer reduced motion.
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        setReducedMotion(mq.matches)
        const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
        mq.addEventListener('change', onChange)
        return () => mq.removeEventListener('change', onChange)
    }, [])

    // Scene fade-out over the last third of the scroll range — done in
    // CSS on the wrapper so it costs nothing on the GPU.
    const fade =
        scrollProgress <= 0.65
            ? 1
            : Math.max(0, 1 - (scrollProgress - 0.65) / 0.35)

    return (
        <div
            ref={wrapperRef}
            className={className}
            style={{ opacity: fade, transition: 'opacity 120ms linear' }}
            aria-hidden
        >
            <Suspense fallback={null}>
                <Canvas
                    frameloop={visible && !reducedMotion ? 'always' : 'demand'}
                    dpr={[1, 1.75]}
                    camera={{
                        position: [INITIAL_CAMERA.x, INITIAL_CAMERA.y, INITIAL_CAMERA.z],
                        fov: 38,
                        near: 0.1,
                        far: 60,
                    }}
                    gl={{
                        antialias: true,
                        alpha: true,
                        powerPreference: 'high-performance',
                    }}
                    style={{ background: 'transparent' }}
                >
                    <CameraRig scrollRef={scrollRef} reducedMotion={reducedMotion} />
                    <InnerSphere />
                    <GlobeDots />
                    <Atmosphere />
                    <StadiumMarkers markers={markers} reducedMotion={reducedMotion} />
                    <TravelArcs arcs={arcs} reducedMotion={reducedMotion} />
                    <AmbientParticles reducedMotion={reducedMotion} />
                </Canvas>
            </Suspense>
        </div>
    )
}
