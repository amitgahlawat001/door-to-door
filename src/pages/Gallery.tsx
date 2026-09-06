import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  CATEGORIES,
  GalleryCategory,
  SHOTS,
} from "../components/gallery/galleryData";
import Lightbox from "../components/gallery/Lightbox";

type Filter = GalleryCategory | "all";

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");
  const [open, setOpen] = useState<number | null>(null);

  const shots = useMemo(
    () => (filter === "all" ? SHOTS : SHOTS.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{t("galleryPage.eyebrow")}</p>
          <h2 className="mt-5 font-display text-headline font-semibold text-ink">
            {t("galleryPage.title")}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {t("galleryPage.intro")}
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2" role="group">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                setFilter(c);
                setOpen(null);
              }}
              aria-pressed={filter === c}
              className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                filter === c ? "text-paper" : "text-muted hover:text-ink"
              }`}
            >
              {filter === c && (
                <motion.span
                  layoutId="gallery-filter"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{t(`galleryPage.filters.${c}`)}</span>
            </button>
          ))}
        </div>

        <motion.ul
          layout
          className="mt-10 grid auto-rows-[230px] grid-cols-1 gap-4 sm:auto-rows-[200px] sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {shots.map((shot, i) => (
              <motion.li
                key={shot.key}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={shot.tall ? "sm:row-span-2" : ""}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl text-left"
                >
                  <img
                    src={shot.image}
                    alt={t(`galleryPage.${shot.key}.title`)}
                    loading={i < 3 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-premium group-hover:scale-[1.06]"
                  />

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-deep via-deep/25 to-transparent opacity-85 transition-opacity duration-500 group-hover:opacity-95"
                  />

                  <span className="absolute left-5 top-5 rounded-full bg-paper/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-ink">
                    {t(`galleryPage.filters.${shot.category}`)}
                  </span>

                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="block font-display text-lg font-semibold text-paper">
                      {t(`galleryPage.${shot.key}.title`)}
                    </span>
                    {/* Caption slides up out of the gradient on hover */}
                    <span className="mt-1.5 block max-h-24 overflow-hidden text-[14px] leading-relaxed text-paper/70 opacity-100 transition-all duration-500 ease-premium sm:max-h-0 sm:opacity-0 sm:group-hover:max-h-24 sm:group-hover:opacity-100">
                      {t(`galleryPage.${shot.key}.caption`)}
                    </span>
                  </span>
                </button>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>

      <Lightbox
        shots={shots}
        index={open}
        onClose={() => setOpen(null)}
        onChange={setOpen}
      />
    </section>
  );
};

export default Gallery;
