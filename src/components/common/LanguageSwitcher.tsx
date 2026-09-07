import React, { useId } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const LANGS = [
  { code: "en", short: "EN", name: "English" },
  { code: "hi", short: "HI", name: "हिन्दी" },
  { code: "gu", short: "GU", name: "ગુજરાતી" },
];

interface Props {
  className?: string;
}

/**
 * Three-way segmented toggle. The active pill is a shared `layoutId` element,
 * so switching languages slides it between segments instead of cross-fading —
 * a transform animation, which is what glass surfaces can afford (animating
 * opacity or the blur itself would re-sample the backdrop every frame).
 *
 * `glass-inset` rather than `glass`: this control lives inside the glass navbar
 * and drawer, and a nested backdrop-filter samples the already-composited
 * parent — it would blur nothing and just look broken.
 */
const LanguageSwitcher: React.FC<Props> = ({ className = "" }) => {
  const { t, i18n } = useTranslation();
  // Unique per instance: the header and the drawer both render one, and a
  // shared layoutId across two mounted copies would animate between them.
  const pill = useId();
  const current = i18n.resolvedLanguage ?? "en";

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={`glass-inset glass-edge relative flex items-center gap-0.5 rounded-full p-1 ${className}`}
    >
      {LANGS.map((lang) => {
        const active = lang.code === current;

        return (
          <button
            key={lang.code}
            type="button"
            lang={lang.code}
            aria-pressed={active}
            aria-label={lang.name}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`relative flex-1 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${
              active ? "text-ink" : "text-paper/75 hover:text-paper"
            }`}
          >
            {active && (
              <motion.span
                layoutId={pill}
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            )}
            <span className="relative">{lang.short}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
