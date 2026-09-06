# Door-to-Door — Website Asset & Build Pack

This pack is designed for the existing `door-to-door` courier website.

## What is included

### Documentation
- `docs/CLAUDE_FULL_PROMPT.md` — the complete prompt to give Claude Code.
- `docs/SITE_BLUEPRINT.md` — page structure and UX.
- `docs/BRAND_GUIDELINES.md` — design tokens and visual language.
- `docs/ANIMATION_SPEC.md` — Apple-style scroll story specification.
- `docs/ASSET_GUIDE.md` — how to use the assets and what real media is still needed.
- `docs/TRACKING_SPEC.md` — tracking UX and status behavior.
- `docs/PERFORMANCE.md` — performance, accessibility and SEO rules.
- `docs/IMPLEMENTATION_PLAN.md` — staged build plan.

### Visual references
The files under `assets/reference/` are AI-generated visual direction boards.
They are useful for communicating style, composition and asset requirements to Claude, but they should not be treated as exact production photography.

### Vector assets
The files under `assets/svg/` are lightweight, reusable SVGs for:
- pickup
- warehouse
- transit
- tracking
- delivery
- security
- support
- network lines
- route path
- ambient background lines

## Recommended project integration

Copy:
`assets/svg/*` → `public/assets/svg/`

Keep the documentation in the root of the project or in a local `docs/` folder.

## Important
No final business claims are embedded in the specification. Replace placeholder stats, locations, testimonials and service claims with verified company information.

The strongest long-term version of the cinematic section is a purpose-built 8–12 second video or 200–400 frame sequence controlled by GSAP ScrollTrigger. The V1 can already look premium using the supplied vector assets, staged stills and motion.
