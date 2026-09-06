import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import transit from "../../assets/svg/transit.svg";
import tracking from "../../assets/svg/tracking.svg";
import secure from "../../assets/svg/secure.svg";
import support from "../../assets/svg/support.svg";
import ambientLines from "../../assets/svg/ambient-lines.svg";

const PILLARS = [
  { key: "fast", icon: transit },
  { key: "trackable", icon: tracking },
  { key: "secure", icon: secure },
  { key: "human", icon: support },
];

const WhyUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-soft py-24 md:py-32">
      <img
        src={ambientLines}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-x-0 top-0 w-full opacity-[0.07]"
      />

      <div className="shell relative">
        <p className="eyebrow">{t("why.eyebrow")}</p>
        <h2 className="mt-5 max-w-2xl font-display text-headline font-semibold text-ink">
          {t("why.title")}
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.key}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl bg-white p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-34px_rgba(11,27,43,0.5)]"
            >
              {/* Oversized index that lifts out of the corner on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-2 -top-6 font-display text-[6rem] font-semibold leading-none text-ink/[0.045] transition-all duration-700 ease-premium group-hover:-translate-y-1 group-hover:text-brand/10"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="relative grid h-14 w-14 place-items-center rounded-xl bg-soft transition-colors duration-500 group-hover:bg-brand/10">
                <img
                  src={pillar.icon}
                  alt=""
                  className="h-7 w-7 transition-transform duration-500 ease-premium group-hover:scale-110"
                />
              </span>

              <h3 className="relative mt-6 font-display text-xl font-semibold text-ink">
                {t(`why.${pillar.key}.title`)}
              </h3>

              <span
                aria-hidden="true"
                className="relative mt-4 block h-px w-10 origin-left bg-accent transition-transform duration-500 ease-premium group-hover:scale-x-[2.4]"
              />

              <p className="relative mt-4 text-[15px] leading-relaxed text-muted">
                {t(`why.${pillar.key}.copy`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
