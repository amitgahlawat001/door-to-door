# Performance, Accessibility & SEO

## Performance goals
Target:
- Lighthouse Performance 90+
- fast first paint
- no layout shift caused by animation
- mobile-first testing

## Image rules
- AVIF/WebP where supported
- responsive `sizes`
- explicit width/height or aspect-ratio
- lazy load below-the-fold media
- do not preload every hero asset

## Video rules
- muted
- `playsInline`
- poster
- avoid autoplaying full-resolution video if it will not be viewed
- consider frame-sequence / canvas only for signature section

## Animation rules
- transform/opacity first
- avoid large blur filters
- limit simultaneous animated DOM nodes
- clean up ScrollTriggers
- reduce motion when requested by OS

## Accessibility
- semantic headings
- keyboard-accessible CTAs
- visible focus states
- descriptive labels
- proper button semantics
- color contrast
- reduced motion support

## SEO
- unique title + description per page
- Organization / LocalBusiness schema when accurate
- sitemap
- robots.txt
- Open Graph
- descriptive image alt text
