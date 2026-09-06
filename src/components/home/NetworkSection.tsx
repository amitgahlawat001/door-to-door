import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import routeNetwork from "../../assets/svg/route-network.svg";
import { company } from "../../config/siteContent";

const BOROUGHS = ["b1", "b2", "b3", "b4", "b5"];

/**
 * Service area. The boroughs listed match the coverage the business already
 * states ("across NYC"). TODO(owner): replace with a real service-area map and
 * edit the list if any borough is not actually served.
 */
const NetworkSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="grain relative overflow-hidden bg-deep py-24 md:py-32">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-accent">{t("network.eyebrow")}</p>
          <h2 className="mt-5 font-display text-headline font-semibold text-paper">
            {t("network.title")}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-paper/65">
            {t("network.body", { area: company.serviceArea })}
          </p>

          <h3 className="mt-10 text-eyebrow font-semibold uppercase text-paper/40">
            {t("coverage.areasLabel")}
          </h3>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {BOROUGHS.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-full border border-white/15 px-4 py-2 text-sm text-paper/80 transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {t(`coverage.${b}`)}
              </motion.li>
            ))}
          </ul>

          <p className="mt-6 max-w-lg text-sm leading-relaxed text-paper/45">
            {t("coverage.beyond")}
          </p>
          <p className="mt-3 text-sm text-paper/35">{t("network.note")}</p>
        </div>

        <img
          src={routeNetwork}
          alt={t("network.imageAlt")}
          loading="lazy"
          decoding="async"
          className="w-full rounded-3xl"
        />
      </div>
    </section>
  );
};

export default NetworkSection;
