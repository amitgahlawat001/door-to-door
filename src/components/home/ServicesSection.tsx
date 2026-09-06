import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "../../redux/store";
import { Service } from "../../redux/servicesSlice";
import ServiceCard from "../services/ServiceCard";
import Button from "../ui/Button";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const services = useSelector((state: RootState) => state.services) as Service[];

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{t("servicesSection.eyebrow")}</p>
            <h2 className="mt-5 max-w-2xl font-display text-headline font-semibold text-ink">
              {t("servicesSection.title")}
            </h2>
          </div>
          <Button to="/services" variant="secondary">
            {t("servicesSection.all")}
          </Button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.type} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
