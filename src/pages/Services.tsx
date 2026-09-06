import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { RootState } from "../redux/store";
import { Service } from "../redux/servicesSlice";
import ServiceCard from "../components/services/ServiceCard";
import SendGuidelines from "../components/services/SendGuidelines";
import Button from "../components/ui/Button";

type Filter = "all" | "consumer" | "business";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = useSelector((state: RootState) => state.services) as Service[];
  const [filter, setFilter] = useState<Filter>("all");

  const filters: { id: Filter; labelKey: string }[] = [
    { id: "all", labelKey: "servicesSection.all" },
    { id: "consumer", labelKey: "servicesSection.tagConsumer" },
    { id: "business", labelKey: "servicesSection.tagBusiness" },
  ];

  const visible =
    filter === "all" ? services : services.filter((s) => s.audience === filter);

  return (
    <>
      <section className="bg-soft py-24 md:py-32">
        <div className="shell">
          <div className="max-w-2xl">
            <p className="eyebrow">{t("servicesPage.title")}</p>
            <h2 className="mt-5 font-display text-headline font-semibold text-ink">
              {t("servicesSection.title")}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {t("servicesPage.description")}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-2" role="group">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                aria-pressed={filter === f.id}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  filter === f.id ? "text-paper" : "text-muted hover:text-ink"
                }`}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="service-filter"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{t(f.labelKey)}</span>
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((service, i) => (
              <ServiceCard
                key={service.type}
                service={service}
                index={i}
                showFeatures
              />
            ))}
          </div>

          <div className="mt-16 flex flex-wrap gap-4">
            <Button to="/contact">{t("cta.quote")}</Button>
            <Button to="/trackshipment" variant="secondary">
              {t("cta.track")}
            </Button>
          </div>
        </div>
      </section>

      <SendGuidelines />
    </>
  );
};

export default Services;
