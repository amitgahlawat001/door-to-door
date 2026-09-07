import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { gsap, useGsapContext } from "../../hooks/useGsap";
import { SCENES } from "./scrollStoryScenes";
import ScrollStoryScene from "./ScrollStoryScene";

gsap.registerPlugin(MotionPathPlugin);

/**
 * Signature scroll story. The section is 300vh (mobile) / 700vh (desktop) tall,
 * the stage inside holds itself with `position: sticky`, and one scrubbed GSAP
 * timeline maps scroll progress 0-100 onto the six beats in scrollStoryScenes.ts.
 *
 * Swapping the V1 stills for a real scrubbed video later: keep this file's
 * timeline and replace the `<ScrollStoryScene>` stack with a muted, playsInline
 * `<video preload="auto">`, then drive it from the same timeline —
 * `tl.to(video, { currentTime: video.duration, duration: 100 }, 0)` — and delete
 * the per-scene crossfade loop. Everything else (narrative, route, progress,
 * reduced-motion fallback) keeps working unchanged.
 */

/** Route geometry lifted from assets/svg/route-path.svg so it can be drawn. */
const ROUTE_D =
  "M100 360 C290 90 420 420 610 220 S930 50 1150 260 S1260 360 1320 140";

const sceneAt = (progress: number) => {
  const pct = progress * 100;
  let index = 0;
  SCENES.forEach((s, i) => {
    if (pct >= s.at) index = i;
  });
  return index;
};

const ScrollStory: React.FC = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  const scope = useGsapContext<HTMLElement>(
    (self, root) => {
      if (reduce) return;

      const q = (sel: string) => (self.selector?.(sel) ?? []) as HTMLElement[];
      const scenes = q(".story-scene");
      const path = q(".story-route")[0] as unknown as SVGPathElement;
      const marker = q(".story-marker")[0];
      const bar = q(".story-bar")[0];
      if (!scenes.length || !path) return;

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.set(scenes.slice(1), { opacity: 0, scale: 1.06 });
      gsap.set(marker, { opacity: 0 });
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });

      const mm = gsap.matchMedia();

      mm.add(
        { desktop: "(min-width: 768px)", mobile: "(max-width: 767px)" },
        (ctx) => {
          const isDesktop = !!ctx.conditions?.desktop;

          // The stage holds itself in place with `position: sticky`; ScrollTrigger
          // only scrubs the timeline across the tall section behind it.
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
              invalidateOnRefresh: true,
              onUpdate: (st) => {
                const next = sceneAt(st.progress);
                if (next !== activeRef.current) {
                  activeRef.current = next;
                  setActive(next);
                }
              },
            },
          });

          // Crossfade the still scenes at the spec's timeline positions.
          SCENES.forEach((scene, i) => {
            if (i === 0) return;
            tl.to(
              scenes[i - 1],
              { opacity: 0, scale: isDesktop ? 1.04 : 1, duration: 7 },
              scene.at
            ).to(scenes[i], { opacity: 1, scale: 1, duration: 7 }, scene.at);
          });

          // Route draws from the sorting beat onward, marker rides it.
          tl.to(path, { strokeDashoffset: 0, duration: 68 }, 30)
            .to(marker, { opacity: 1, duration: 3 }, 30)
            .to(
              marker,
              {
                duration: 68,
                motionPath: {
                  path,
                  align: path,
                  alignOrigin: [0.5, 0.5],
                },
              },
              30
            )
            .to(bar, { scaleX: 1, duration: 100 }, 0)
            // Hold the delivered frame until the pin releases.
            .to({}, { duration: 4 }, 98);

          return () => tl.kill();
        }
      );
    },
    [reduce]
  );

  const scene = SCENES[active];

  if (reduce) {
    return (
      <section className="bg-deep py-24">
        <div className="shell">
          <p className="eyebrow text-accent">{t("story.eyebrow")}</p>
          <h2 className="mt-5 max-w-3xl font-display text-headline font-semibold text-paper">
            {t("story.title")}
          </h2>
          <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SCENES.map((s) => (
              <li key={s.key} className="rounded-2xl bg-white/5 p-6">
                <img src={s.icon} alt="" className="h-8 w-8 invert" />
                <h3 className="mt-4 font-display text-xl font-semibold text-paper">
                  {t(`story.${s.key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] text-paper/60">
                  {t(`story.${s.key}.copy`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={scope as React.RefObject<HTMLElement>}
      className="story-section grain relative h-[300vh] bg-deep md:h-[700vh]"
      aria-label={t("story.title")}
    >
      <div className="story-stage sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="shell w-full">
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14">
            {/* Stage */}
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/10] lg:aspect-auto lg:h-[66vh]">
              {SCENES.map((s, i) => (
                <ScrollStoryScene key={s.key} scene={s} index={i} />
              ))}

              <svg
                viewBox="0 0 1400 500"
                className="pointer-events-none absolute inset-x-0 bottom-0 w-full"
                aria-hidden="true"
              >
                <path
                  className="story-route"
                  d={ROUTE_D}
                  fill="none"
                  stroke="#1479FF"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <g className="story-marker">
                  <circle r="30" fill="#FF7A00" opacity="0.25" />
                  <circle r="14" fill="#FF7A00" />
                </g>
              </svg>
            </div>

            {/* Narrative */}
            <div className="lg:pl-6">
              <p className="eyebrow text-accent">{t("story.eyebrow")}</p>

              <div className="relative mt-4 min-h-[170px] sm:min-h-[190px] lg:mt-5">
                {/* No `mode` here on purpose: the beats are stacked with
                    `absolute inset-0` and cross-fade. `mode="wait"` would hold
                    the panel empty while a scrub races past several beats. */}
                <AnimatePresence initial={false}>
                  <motion.div
                    key={scene.key}
                    className="absolute inset-0"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h2 className="font-display text-3xl font-semibold text-paper sm:text-4xl lg:text-5xl">
                      {t(`story.${scene.key}.title`)}
                    </h2>
                    <p className="mt-4 max-w-md text-[17px] leading-relaxed text-paper/65">
                      {t(`story.${scene.key}.copy`)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress */}
              <div className="mt-6 lg:mt-8">
                <div className="h-px w-full bg-white/15">
                  <div className="story-bar h-px w-full bg-accent" />
                </div>
                <ol className="mt-5 hidden flex-wrap gap-x-5 gap-y-2 sm:flex">
                  {SCENES.map((s, i) => (
                    <li
                      key={s.key}
                      className={`text-xs font-medium uppercase tracking-widest transition-colors duration-300 ${
                        i === active ? "text-accent" : "text-paper/35"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScrollStory;
