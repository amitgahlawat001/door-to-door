import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const STEPS = ["s1", "s2", "s3", "s4"];

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="shell">
        <p className="eyebrow">{t("howItWorks.eyebrow")}</p>
        <h2 className="mt-5 max-w-2xl font-display text-headline font-semibold text-ink">
          {t("howItWorks.title")}
        </h2>

        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              {/* Rail that links the steps on wide screens */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-5 hidden h-px w-full bg-ink/10 lg:block"
              />
              <span className="relative grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-paper font-display text-sm font-semibold text-ink transition-colors duration-500 group-hover:border-accent group-hover:bg-accent">
                {String(i + 1).padStart(2, "0")}
              </span>

              <h3 className="mt-7 font-display text-xl font-semibold text-ink">
                {t(`howItWorks.${step}.title`)}
              </h3>
              <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted">
                {t(`howItWorks.${step}.copy`)}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
