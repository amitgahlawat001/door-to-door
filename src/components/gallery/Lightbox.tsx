import React, { useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GalleryShot } from "./galleryData";
import { useDialog } from "../../hooks/useDialog";

interface Props {
  shots: GalleryShot[];
  index: number | null;
  onClose: () => void;
  onChange: (index: number) => void;
}

const Lightbox: React.FC<Props> = ({ shots, index, onClose, onChange }) => {
  const { t } = useTranslation();
  const open = index !== null;

  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + shots.length) % shots.length);
    },
    [index, shots.length, onChange]
  );

  // Scroll lock, Escape, focus trap and focus return.
  const panel = useDialog<HTMLDivElement>(open, onClose);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, step]);

  const shot = index === null ? null : shots[index];

  return (
    <AnimatePresence>
      {shot && (
        <motion.div
          key="lightbox"
          ref={panel}
          role="dialog"
          aria-modal="true"
          aria-label={t(`galleryPage.${shot.key}.title`)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-deep/95 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label={t("galleryPage.close")}
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-paper transition-colors hover:border-accent hover:text-accent sm:right-8 sm:top-8"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
              <path
                d="M4 4l12 12M16 4L4 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <motion.figure
            key={shot.key}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-full w-full max-w-4xl flex-col"
          >
            <img
              src={shot.image}
              alt={t(`galleryPage.${shot.key}.title`)}
              className="max-h-[65vh] w-full rounded-2xl object-contain"
            />
            <figcaption className="mt-6 text-center">
              <p className="text-eyebrow font-semibold uppercase text-accent">
                {t(`galleryPage.filters.${shot.category}`)}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-paper">
                {t(`galleryPage.${shot.key}.title`)}
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-paper/65">
                {t(`galleryPage.${shot.key}.caption`)}
              </p>
            </figcaption>
          </motion.figure>

          <div
            className="mt-8 flex items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {[
              { dir: -1, label: t("galleryPage.prev"), path: "M12 4L6 10l6 6" },
              { dir: 1, label: t("galleryPage.next"), path: "M8 4l6 6-6 6" },
            ].map((btn) => (
              <button
                key={btn.label}
                type="button"
                onClick={() => step(btn.dir)}
                aria-label={btn.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-paper transition-colors hover:border-accent hover:text-accent"
              >
                <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden="true">
                  <path
                    d={btn.path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
            <span className="text-sm tabular-nums text-paper/50">
              {index! + 1} / {shots.length}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
