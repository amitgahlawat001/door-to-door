import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Service } from "../../redux/servicesSlice";
import { SERVICE_ICONS } from "./serviceIcons";

interface Props {
  service: Service;
  index: number;
  /** Page cards carry the "what's included" list; homepage cards stay compact. */
  showFeatures?: boolean;
}

const ServiceCard: React.FC<Props> = ({ service, index, showFeatures }) => {
  const { t } = useTranslation();

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_28px_60px_-34px_rgba(11,27,43,0.5)]"
    >
      {/* Accent rule that draws itself across the top on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-accent transition-transform duration-500 ease-premium group-hover:scale-x-100"
      />

      <div className="flex items-start justify-between gap-4">
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-soft transition-colors duration-500 group-hover:bg-brand/10">
          <img
            src={SERVICE_ICONS[service.type]}
            alt=""
            className="h-7 w-7 transition-transform duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:scale-110"
          />
        </span>

        <span className="rounded-full border border-ink/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-muted">
          {t(
            service.audience === "business"
              ? "servicesSection.tagBusiness"
              : "servicesSection.tagConsumer"
          )}
        </span>
      </div>

      <h3 className="mt-6 font-display text-xl font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
        {t(service.titleKey)}
      </h3>

      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        {t(service.descriptionKey)}
      </p>

      {showFeatures && (
        <>
          <p className="mt-6 text-eyebrow font-semibold uppercase text-muted">
            {t("servicesSection.featuresLabel")}
          </p>
          <ul className="mt-3 space-y-2">
            {service.featureKeys.map((key) => (
              <li key={key} className="flex items-start gap-3 text-[15px] text-ink/80">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-[3px] h-4 w-4 shrink-0 text-brand"
                  aria-hidden="true"
                >
                  <path
                    d="m4 10.5 4 4 8-9"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {t(key)}
              </li>
            ))}
          </ul>
        </>
      )}

      <Link
        to="/contact"
        className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-ink transition-colors duration-300 group-hover:text-brand"
      >
        {t("servicesSection.cardCta")}
        <span
          aria-hidden="true"
          className="transition-transform duration-500 ease-premium group-hover:translate-x-1.5"
        >
          →
        </span>
      </Link>
    </motion.article>
  );
};

export default ServiceCard;
