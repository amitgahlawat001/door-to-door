import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/store";

interface Testimonial {
  textKey: string;
  authorKey: string;
}

/**
 * TODO(owner): the quotes in redux/testimonialsSlice.ts are placeholders
 * carried over from the previous site. Replace them with real, attributable
 * customer reviews (or delete this section) before launch.
 */
const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const testimonials = useSelector(
    (state: RootState) => state.testimonials
  ) as Testimonial[];

  if (!testimonials.length) return null;

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="shell">
        <p className="eyebrow">{t("home.testimonialsTitle")}</p>

        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.authorKey}>
              <blockquote className="font-display text-xl leading-snug text-ink">
                “{t(item.textKey)}”
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted">
                {t(item.authorKey)}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
