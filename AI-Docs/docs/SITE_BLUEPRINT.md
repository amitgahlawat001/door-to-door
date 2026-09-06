# Door-to-Door Website Blueprint

## Objective
The website must make the business understandable within seconds, then lead visitors to two core actions:
1. Track a package.
2. Start a shipment / contact the company.

## Recommended site map
- `/` — cinematic homepage
- `/tracking` — package tracking experience
- `/services` — consumer + business services
- `/about` — story, operations, coverage
- `/contact` — contact / quote form
- Optional `/business` — B2B solutions
- Optional `/faq` — shipping questions

## Homepage structure

### 01. Navigation
Minimal navigation:
- Services
- Tracking
- About
- Contact
- Primary CTA: Track Package / Get Quote

Behavior:
- transparent over hero
- becomes solid on scroll
- menu morphs cleanly on mobile

### 02. Hero
Headline concept:
"Moving what matters."
Supporting line:
"From your doorstep to theirs — trusted, tracked, and moving with purpose."

CTAs:
- Track Your Package
- Get a Quote

Hero visual:
- premium courier package / vehicle
- subtle network or route graphics
- no busy hero carousel

### 03. Scroll Story — signature section
Narrative:
Package → Pickup → Sorting → Transit → Destination → Delivered.

Use a pinned visual and scroll-controlled timeline.
Primary implementation:
- GSAP ScrollTrigger
- scrubbed timeline
- pin
- progressive text changes
- route-path animation
- image/scene crossfades

### 04. Trust / stats
Use real company numbers once available.
Suggested structure:
- Shipments
- On-time delivery
- Cities / service area
- Customer support

Never invent business claims in production.

### 05. Tracking
Dominant input and route visualization.
Example:
`DTD-123456789` → status → current location → ETA.

### 06. Services
Consumer:
- Same-day / express
- Standard parcel
- Document delivery
- Local delivery

Business:
- E-commerce fulfillment
- Bulk / recurring shipping
- COD / returns
- Dedicated business support

Only show services the company actually provides.

### 07. Coverage / network
Use the provided abstract route-network SVG as a visual placeholder.
Replace with a real service-area map when cities are confirmed.

### 08. Why Door-to-Door
Four concise principles:
- Fast
- Trackable
- Secure
- Human support

### 09. Testimonials
Real reviews only.
Use placeholders while the business is new.

### 10. CTA
"Ready to move it?"
Buttons:
- Send a Package
- Talk to Us

### 11. Footer
Contact information, social links, legal pages, service area.

## Conversion principle
Every decorative animation must ultimately make the next action clearer.
