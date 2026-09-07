---
name: glassmorphism
description: How glass surfaces are built in this project. Use whenever adding, editing, or reviewing any translucent/blurred surface — navbars, cards, modals, sticky CTAs, overlays, badges — or when a task mentions glass, glassmorphism, frosted, blur, backdrop, translucent, or acrylic. Carries the tokens, the placement rules, the contrast floor, the performance budget, and the browser bugs that break it.
---

# Glassmorphism in this project

Binding visual constraint. Glass is part of the design language, not an effect
sprinkled at the end.

**Glass only works over something worth seeing through to.** A blurred panel on a
flat background is a gray rectangle with extra GPU cost. If there is no gradient,
image, color field, or overlapping shape behind it, do not use glass — use a solid
surface. This is the single rule most implementations break.

---

## 1. Tokens

Defined once in `app/globals.css`. Never hand-write a blur value, an rgba, or a
border color in a component.

```css
@theme {
  /* light ground */
  --glass-bg:            rgb(255 255 255 / 0.62);
  --glass-bg-strong:     rgb(255 255 255 / 0.80);  /* text-bearing surfaces */
  --glass-border:        rgb(255 255 255 / 0.75);
  --glass-edge:          rgb(255 255 255 / 0.95);  /* top 1px highlight */
  --glass-shadow:        0 8px 32px rgb(15 23 42 / 0.10);
  --glass-blur:          16px;
  --glass-saturate:      160%;
}

@media (prefers-color-scheme: dark) {
  @theme {
    --glass-bg:          rgb(255 255 255 / 0.07);
    --glass-bg-strong:   rgb(255 255 255 / 0.12);
    --glass-border:      rgb(255 255 255 / 0.14);
    --glass-edge:        rgb(255 255 255 / 0.22);
    --glass-shadow:      0 8px 32px rgb(0 0 0 / 0.40);
  }
}

@utility glass {
  background: var(--glass-bg);
  border: 1px solid var(--glass-border);
  box-shadow: var(--glass-shadow);
  border-radius: var(--radius-xl);

  @supports (backdrop-filter: blur(1px)) or (-webkit-backdrop-filter: blur(1px)) {
    -webkit-backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
    backdrop-filter: blur(var(--glass-blur)) saturate(var(--glass-saturate));
  }
}

/* the light catching the top edge — what separates real glass from a tinted box */
@utility glass-edge {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    inset: 0 0 auto;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--glass-edge) 22%, var(--glass-edge) 78%, transparent);
    pointer-events: none;
  }
}

/* text-bearing glass: opaque enough to pass contrast over any backdrop */
@utility glass-solid {
  background: var(--glass-bg-strong);
}
```

`saturate()` is not decoration. Blur alone desaturates what is behind it and the
panel reads muddy; saturation restores the color the blur ate. Never ship blur
without it.

---

## 2. Where glass is allowed

| Allowed | Why |
|---|---|
| Sticky header / nav | Content scrolls under it — the classic correct case |
| Hero stat or proof cards | Sit over the hero's gradient or screenshot |
| Highlighted pricing tier (one only) | Lifts one card out of a row of solid ones |
| Modal / dialog, and its backdrop | Depth over the page beneath |
| Sticky mobile CTA bar | Over scrolling content |
| Floating badge over an image | Over real imagery |

| Banned | Why |
|---|---|
| Body copy blocks, article text | Contrast is unpredictable over a moving backdrop |
| Data tables, dense lists, dashboard grids | Repaints on every scroll row; kills LCP and INP |
| Every card on a page | Nothing reads as elevated when everything floats |
| Footers, form fields, plain sections over flat color | Nothing behind them; pure cost, no effect |
| Nested inside another glass surface | `backdrop-filter` samples the composited parent — the inner one blurs nothing and looks broken |

**Budget: at most 3 glass surfaces visible in any one viewport.** Nav counts as one.

---

## 3. Contrast is non-negotiable

Text on glass must hold **4.5:1 against the worst-case backdrop that can scroll
under it**, not against the average. Two ways to guarantee it, in order of
preference:

1. Use `glass-solid` (`--glass-bg-strong`) on any surface carrying body text.
2. Constrain the backdrop: put the glass over a controlled gradient or an image
   already darkened with a scrim, so worst case is known.

Never fix contrast by adding `text-shadow`. That is a smear, not a fix.

Honor the user's setting:

```css
@media (prefers-reduced-transparency: reduce) {
  .glass, .glass-solid {
    background: var(--color-surface);
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
}
```

The `@supports` guard in the token block already covers browsers without
`backdrop-filter` — they get the semi-transparent background, which is why
`--glass-bg` must stay legible on its own. Test by disabling the filter.

---

## 4. Performance rules

This site targets LCP under 2.0s on a mid-range Android phone on mobile data.
`backdrop-filter` is the most expensive property on that device.

- **Never animate `backdrop-filter`, `blur()`, or the element's `opacity` while
  blurred.** Every frame re-samples and re-blurs the backdrop. Animate `transform`
  and the border color instead.
- **Never put glass on a scroll-driven parallax layer.** Blur plus continuous
  repaint is the worst pairing available.
- **No glass above the fold on the largest contentful element.** It delays LCP paint.
- **No glass inside a list that can grow.** Three fixed cards is fine; a mapped
  array is not.
- Add `will-change` or `translateZ(0)` only after a profiler shows a problem.
  Speculative compositing hints cost memory and usually make it worse.

---

## 5. Browser bugs worth knowing before you hit them

- **`-webkit-backdrop-filter` is still required** for Safari, including iOS 17 and 18.
  The token block above ships both; do not write bare `backdrop-filter` anywhere else.
- **`overflow: hidden` + `border-radius` on the parent clips the blur wrongly in
  Safari.** Put the radius on the glass element itself, not on a wrapper that clips it.
- **A `transform` on any ancestor breaks `position: fixed` glass on iOS** — the
  backdrop samples the wrong layer. Keep sticky/fixed glass out of transformed
  subtrees.
- **Nested `backdrop-filter` does not stack.** The child samples the parent's
  already-composited output. See the ban above.
- **Chrome on Android sometimes drops the filter when the element has zero-alpha
  background.** Always give glass a real `background`, never `transparent`.

---

## 6. Checklist before calling a glass surface done

Run through all six. Any "no" means it is not finished.

1. Is there real visual content behind it? (If no: use a solid surface.)
2. Does it carry `saturate()` alongside the blur?
3. Does it have the 1px top edge highlight (`glass-edge`)?
4. Is text on it at 4.5:1 against the *worst* backdrop that can pass under it?
5. With `backdrop-filter` disabled in devtools, is it still readable?
6. Is it one of at most 3 in the viewport, and outside any scrolling list?

Quick audit — flags every hand-written blur that bypassed the tokens:

```bash
grep -rnE "backdrop-(filter|blur)|blur\(" app components --include=*.tsx --include=*.css \
  | grep -v "globals.css"
```

Expected output: nothing. Components use `glass` / `glass-solid` / `glass-edge`, never raw values.
