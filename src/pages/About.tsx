import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutUs1 from "../assets/images/heroSectionImage/aboutUs1.jpg";
import aboutUs2 from "../assets/images/heroSectionImage/aboutUs2.jpg";
import Button from "../components/ui/Button";
import { company } from "../config/siteContent";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

const PRINCIPLES = ["p1", "p2", "p3"];
const CARE = ["h1", "h2", "h3", "h4"];

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-paper py-24 md:py-32">
        <div className="shell grid items-center gap-14 lg:grid-cols-2">
          <motion.div {...reveal} className="grid grid-cols-2 gap-5">
            <img
              src={aboutUs1}
              alt=""
              loading="lazy"
              className="h-56 w-full rounded-2xl object-cover md:h-80"
            />
            <img
              src={aboutUs2}
              alt=""
              loading="lazy"
              className="mt-10 h-56 w-full rounded-2xl object-cover md:h-80"
            />
          </motion.div>

          <motion.div {...reveal}>
            <p className="eyebrow">{t("about.visionTitle")}</p>
            <h2 className="mt-5 font-display text-headline font-semibold text-ink">
              {t("hero.about.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {t("about.visionText")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* How we work */}
      <section className="bg-soft py-24 md:py-32">
        <div className="shell">
          <p className="eyebrow">{t("about.principlesTitle")}</p>
          <h2 className="mt-5 max-w-2xl font-display text-headline font-semibold text-ink">
            {t("about.teamHeadline")}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t("about.teamText")}
          </p>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-2xl bg-white p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(11,27,43,0.5)]"
              >
                <span
                  aria-hidden="true"
                  className="block h-px w-10 origin-left bg-accent transition-transform duration-500 ease-premium group-hover:scale-x-[2.4]"
                />
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  {t(`about.${p}Title`)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {t(`about.${p}Copy`)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Handling standards */}
      <section className="grain relative bg-deep py-24 md:py-32">
        <div className="shell">
          <p className="eyebrow text-accent">{t("handling.eyebrow")}</p>
          <h2 className="mt-5 max-w-2xl font-display text-headline font-semibold text-paper">
            {t("handling.title")}
          </h2>

          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {CARE.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-white/15 pt-6"
              >
                <h3 className="font-display text-lg font-semibold text-paper">
                  {t(`handling.${c}.title`)}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/60">
                  {t(`handling.${c}.copy`)}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-4">
            <Button to="/services">{t("servicesSection.all")}</Button>
            <a
              href={company.phoneHref}
              className="text-sm font-semibold text-paper/70 underline underline-offset-4 hover:text-accent"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
