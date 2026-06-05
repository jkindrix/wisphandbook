# ADR-0008: Diagram sources live in the repo

**Status:** accepted (2026-06-05)

**Context.** WISP teaching is intensely diagrammatic — Fresnel zones, sector
coverage, tower elevations, network topologies. The expensive mistake is
exporting PNGs from a tool whose source files live on someone's desktop:
two years later, "update this diagram for the new band" becomes a redraw.

**Decision.** One primary tool: **Excalidraw**, with `.excalidraw` source
files committed next to their SVG exports. Hand-authored SVG for anything
needing precision. Mermaid permitted for boxes-and-arrows flows where
hand-drawing adds nothing. No PNG-only diagrams, ever.

**Consequences.** Every diagram stays editable forever. Slight friction at
authoring time (export + commit two files) buys permanent revisability.
