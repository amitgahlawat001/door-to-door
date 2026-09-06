# CLAUDE_FULL_PROMPT.md

Copy everything below into Claude Code after opening the existing `door-to-door` project.

---

You are acting as the lead creative director, UX designer, motion designer, and senior frontend engineer for my existing courier business website, **Door-to-Door**.

I already have a working project. **Do not rebuild it from scratch and do not delete working features.** First inspect the repository and understand what already exists.

## 1. BUSINESS GOAL

The final website must communicate the complete courier business and make three actions obvious:

1. Understand what Door-to-Door does.
2. Track a package.
3. Contact / request a shipment.

The experience should feel premium, cinematic, trustworthy, and technology-driven.

The site should NOT look like a generic courier template.

## 2. CREATIVE DIRECTION

Core brand idea:

**Every package has a destination.**

Working brand line:
**Moving What Matters.**

Visual personality:
- premium
- fast
- reliable
- human
- connected
- modern logistics technology

Design inspiration:
- Apple-level storytelling and polish
- Stripe / Linear-level typography and spacing
- modern logistics editorial websites

A current reference for interaction quality is:
https://unitedcarriers.com/

Use that only for high-level inspiration:
- large editorial type
- strong visual storytelling
- pinned / scroll-driven composition
- milestone stats
- large operational imagery
- service storytelling

DO NOT copy:
- their logo
- content
- exact layout
- colors
- images
- code
- branding
- wording

## 3. FIRST TASK: AUDIT THE EXISTING PROJECT

Before coding, inspect:
- package.json
- routing
- pages
- components
- CSS / Tailwind configuration
- existing animations
- assets
- tracking logic
- API calls
- contact form
- responsive behavior

Create an internal implementation plan and preserve working functionality.

Do not modify unrelated backend behavior unless necessary.

## 4. USE THE PROVIDED DOCUMENTATION

Read these files first:
- `docs/SITE_BLUEPRINT.md`
- `docs/BRAND_GUIDELINES.md`
- `docs/ANIMATION_SPEC.md`
- `docs/ASSET_GUIDE.md`
- `docs/TRACKING_SPEC.md`
- `docs/PERFORMANCE.md`
- `docs/IMPLEMENTATION_PLAN.md`

Use the provided SVGs from `assets/svg/`.

The PNG boards inside `assets/reference/` are **visual references**, not literal final content.

## 5. HOMEPAGE STRUCTURE

Build the homepage in this order:

### A. NAVIGATION
Minimal navigation:
- Services
- Tracking
- About
- Contact
- primary CTA

Behavior:
- transparent over hero
- subtle solid background after scroll
- mobile menu with polished transition

### B. HERO
Create an editorial hero.

Headline:
**Moving what matters.**

Subtext:
**From your doorstep to theirs — trusted, tracked, and moving with purpose.**

Primary CTA:
**Track Your Package**

Secondary CTA:
**Get a Quote**

Hero should contain one strong visual, not a crowded collage.

### C. SIGNATURE SCROLL STORY
This is the most important interaction.

Create a pinned section approximately 500–700vh tall on desktop.

The visual remains pinned while scrolling.

Narrative:
1. Package
2. Pickup
3. Sorting
4. In Transit
5. Out for Delivery
6. Delivered

Scroll position controls progress.

Implement with:
- GSAP
- ScrollTrigger
- scrub
- pin
- timelines

Do NOT simply play a video based on wheel events.

The user must be able to:
- scroll down → progress forward
- scroll up → reverse
- stop scrolling → stop visual progress

## 6. SCROLL STORY VISUAL STRATEGY

There is no finished production video yet.

Therefore build the V1 using:
- still scene assets
- SVG route graphics
- package illustration
- image crossfades
- scale/parallax
- route path animation
- text changes

Create the architecture so a real scroll-controlled MP4 or frame sequence can be dropped in later without redesigning the section.

If the repository does not already have cinematic video assets, do NOT invent a giant remote video URL.

## 7. TIMELINE

0–15%:
- package enters
- headline / label

15–30%:
- package rotates / lifts
- “Picked up”

30–45%:
- warehouse / sorting
- route starts

45–65%:
- vehicle / transit
- route progresses

65–82%:
- destination marker
- “Out for delivery”

82–100%:
- delivery moment
- success state
- “Delivered”

Use motion to communicate the story; do not animate every element.

## 8. SUPPORTING SECTIONS

After the scroll story, add:

### TRUST / STATS
Use placeholders clearly marked for replacement.
Never invent final company claims.

### TRACKING
Large tracking field:
“Enter tracking number”

Show:
- shipment status
- route
- current milestone
- ETA when available
- support CTA

Reuse existing tracking functionality if present.

Animate:
- active milestone
- route path
- progress indicator
- package marker

### SERVICES
Separate consumer and business services.

Use concise visual cards or editorial rows rather than a giant card grid.

### COVERAGE / NETWORK
Use `assets/svg/route-network.svg` as a temporary abstract network.
Do not claim cities that the company does not actually serve.

### WHY DOOR-TO-DOOR
Use:
- Fast
- Trackable
- Secure
- Human Support

### TESTIMONIALS
Use real testimonials when available.
Otherwise use clearly marked placeholders.

### CONTACT / CTA
Headline:
**Ready to move it?**

Buttons:
- Send a Package
- Talk to Us

### FOOTER
Include real contact information from existing project data.

## 9. DESIGN TOKENS

Use the provided brand guide:
- #0B1B2B
- #08131F
- #1479FF
- #FF7A00
- #F7FAFC
- #6B7785
- #EEF3F7

Do not overuse gradients.

Use strong black/navy, white space, and orange only as an action accent.

## 10. TYPOGRAPHY

Prefer:
- Geist / Inter Tight / Manrope-style display
- Inter / Geist Sans body

Hero typography should be large and editorial.

Avoid:
- excessive bold text
- tiny copy
- dense sections

## 11. ANIMATION RULES

GSAP + ScrollTrigger:
- major scroll storytelling
- pinned sections
- scrubbed progress
- route animations
- parallax
- SVG drawing

Framer Motion / CSS:
- navigation
- button hover
- menu
- dialogs
- local component transitions

Prefer:
- transform
- opacity

Avoid layout-heavy animation unless necessary.

Every animation must:
- be purposeful
- work on mobile
- have cleanup
- support reduced motion

## 12. REDUCED MOTION

Support:
`prefers-reduced-motion: reduce`

When enabled:
- disable scrubbing
- use still images
- reduce parallax
- keep only necessary transitions

## 13. MOBILE

Do NOT shrink desktop into mobile.

Use a simplified story:
- shorter pin
- fewer states
- reduced visual density
- fallback still image when necessary

Test:
- 360px
- 390px
- 430px
- tablet

## 14. PERFORMANCE

Target Lighthouse 90+.

Rules:
- compress images
- WebP/AVIF where possible
- lazy load below fold
- don't load Three.js unless genuinely needed
- dynamically import heavy animation modules
- avoid unnecessary rerenders
- clean up GSAP
- don't preload every asset

## 15. ACCESSIBILITY

Use:
- semantic HTML
- accessible buttons
- keyboard focus
- correct heading order
- proper contrast
- form labels
- reduced motion support

## 16. COMPONENT ARCHITECTURE

Prefer reusable components such as:

`Navbar`
`Hero`
`ScrollStory`
`ScrollStoryScene`
`TrackingSection`
`Stats`
`Services`
`NetworkSection`
`WhyUs`
`Testimonials`
`CTA`
`Footer`

For animation utilities:
- `useScrollStory`
- `useReducedMotion`
- `gsapContext`
- isolated ScrollTrigger setup

Avoid monolithic 500-line components.

## 17. IMPORTANT: PRESERVE EXISTING FUNCTIONALITY

If tracking already works:
- preserve it
- improve its UI
- do not break API integration

If contact functionality already works:
- preserve it

If backend routes exist:
- do not rewrite them unless required.

## 18. CONTENT HONESTY

Do not invent:
- customer numbers
- delivery percentages
- cities
- years in business
- certifications
- testimonials

Use placeholders clearly marked for the business owner.

## 19. DEVELOPMENT PROCESS

Work in these stages:

### Stage 1
Audit repository.

### Stage 2
Refactor only where needed.

### Stage 3
Implement design system.

### Stage 4
Implement homepage structure.

### Stage 5
Implement signature ScrollTrigger story.

### Stage 6
Integrate existing tracking/contact features.

### Stage 7
Mobile and reduced-motion pass.

### Stage 8
Performance / accessibility pass.

### Stage 9
Final creative review.

## 20. FINAL CREATIVE REVIEW

After implementation, act like a ruthless creative director.

Ask:
- Does this feel premium?
- Does it look like a template?
- Are there too many cards?
- Is the hero memorable?
- Does the scroll story actually tell a story?
- Is the CTA obvious?
- Is the tracking flow intuitive?
- Is mobile still impressive?
- Are the animations purposeful?
- Is the page too slow?

Fix the weakest areas.

## 21. DELIVERABLE

When finished:
- provide a clean component structure
- explain what files were added / changed
- explain how ScrollTrigger works
- explain how to replace the V1 still-image story with a real scrubbed video later
- provide exact run/build commands
- do not leave dead code
- do not leave placeholder remote assets
- do not break existing functionality

Build a website that feels like a **premium modern logistics brand**, with the signature visual idea:

**Every package has a destination.**

---
