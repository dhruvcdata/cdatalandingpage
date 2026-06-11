# worldcup/three

3D globe scene for the World Cup 2026 data page.

- `WorldCupGlobe.tsx` — client-only R3F scene. Import it with
  `next/dynamic` and `ssr: false`; build its `markers`/`arcs` props on
  the server with `venueMarkers()` / `computeTravelArcs()` from
  `@/lib/worldcup/journeys`.
- `globe-dots.json` — GENERATED dotted-landmass point set (compact
  array of `[lat, lon]` pairs). Do not edit by hand.

## Regenerating globe-dots.json

Source: Natural Earth 1:110m land (public domain) via the
`world-atlas@2` package on unpkg. Sampled on a ~1.8° latitude grid
with longitude spacing widened by 1/cos(lat) for even density on the
sphere; Antarctica and the polar cap are trimmed (lat −60..84).

```sh
node scripts/generate-globe-dots.mjs
# or, behind a proxy that breaks node's fetch:
curl -fsSL https://unpkg.com/world-atlas@2/land-110m.json -o /tmp/land-110m.json
node scripts/generate-globe-dots.mjs /tmp/land-110m.json
```

Tune density via `LAT_STEP` in the script (current output: ~3.2k dots,
~43 KB).
