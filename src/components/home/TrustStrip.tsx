import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { trustFacts } from "../../config/siteContent";

/**
 * Qualitative trust facts. See siteContent.ts for how to add real operating
 * numbers (shipments, on-time rate, cities) once the business has them.
 */
const TrustStrip: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="border-b border-ink/10 bg-paper py-16">
      <div className="shell grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink/10 lg:grid-cols-4">
        {trustFacts.map((fact, i) => (
          <motion.div
            key={fact.labelKey}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex h-full flex-col bg-paper px-5 py-6 sm:px-6 sm:py-7"
          >
            <p className="text-eyebrow font-semibold uppercase text-muted">
              {t(fact.labelKey)}
            </p>
            <p className="mt-auto pt-6 font-display text-[clamp(1.5rem,2vw,2.1rem)] font-semibold leading-tight tracking-tight text-ink">
              {t(fact.valueKey)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;
