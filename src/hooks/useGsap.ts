import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Runs `setup` inside a gsap.Context scoped to the returned ref, and reverts it
 * on unmount or when `deps` change. Reverting kills every tween, ScrollTrigger
 * and matchMedia created inside, so route changes leave nothing behind.
 *
 * `setup` also receives the scope element itself — context selectors only match
 * descendants, so this is the way to target the root as a ScrollTrigger trigger.
 */
export function useGsapContext<T extends HTMLElement>(
  setup: (self: gsap.Context, root: T) => void,
  deps: unknown[] = []
) {
  const scope = useRef<T>(null);

  useLayoutEffect(() => {
    const root = scope.current;
    if (!root) return;

    const ctx = gsap.context((self) => setup(self, root), scope);

    // Measure on the next frame: triggers created during a StrictMode remount
    // (or before a late image lands) otherwise start life with start/end at 0.
    const frame = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(frame);
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return scope;
}

export { gsap, ScrollTrigger };
