# Animation Specification

## Goal
Create premium scroll storytelling inspired by modern editorial logistics sites. Use interaction principles only; do not copy another company's branding, content, imagery or code.

## Animation hierarchy

### Level 1 — page motion
- header state transition
- section reveal
- subtle image scale
- button hover

### Level 2 — storytelling
- pinned sections
- scrubbed timelines
- parallax
- clip-path image transitions
- SVG route drawing

### Level 3 — cinematic hero
Preferred:
- 8–12 second purpose-built video scrubbed by scroll, OR
- 200–400 frame image sequence rendered to canvas.

If no production video exists, use staged visual scenes and SVG/CSS motion first.

## Signature timeline
Scroll 0–15%:
- package fades / scales in

15–30%:
- package lifts / rotates
- "Picked up" appears

30–45%:
- warehouse / sorting scene
- route line begins

45–65%:
- transport scene
- route progresses

65–82%:
- destination marker becomes active
- "Out for delivery"

82–100%:
- delivery scene
- final checkmark
- CTA / track action

## Technical rules
Use GSAP + ScrollTrigger for:
- `pin`
- `scrub`
- timeline sequencing
- route path animation
- section progress

Use Framer Motion for:
- menus
- buttons
- dialogs
- local component transitions

Prefer GPU-friendly properties:
- transform
- opacity
- filter used sparingly

Avoid:
- animating width/height/top/left when transform can do it
- dozens of simultaneous ScrollTriggers
- nested pinning unless necessary

## Reduced motion
When `prefers-reduced-motion: reduce`:
- disable scrubbing
- replace cinematic sequences with still images
- keep simple fades where acceptable

## Mobile
Do not force desktop animation density onto phones.
Prefer:
- shorter pin duration
- simplified route
- still image fallback
- fewer transition states

## Cleanup
Every GSAP context must revert on unmount.
Do not leave ScrollTriggers alive after route changes.

## Performance
- use poster image
- preload only the first visual state
- lazy load below-fold scenes
- compress images
- use AVIF/WebP where practical
- code-split heavy 3D modules
