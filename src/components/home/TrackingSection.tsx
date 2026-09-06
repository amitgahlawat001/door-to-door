import React from "react";
import { useTranslation } from "react-i18next";
import TrackingPanel from "../tracking/TrackingPanel";

const TrackingSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="tracking" className="bg-soft py-24 md:py-32">
      <div className="shell max-w-4xl">
        <p className="eyebrow">{t("trackingSection.eyebrow")}</p>
        <h2 className="mt-5 font-display text-headline font-semibold text-ink">
          {t("trackingSection.title")}
        </h2>
        <p className="mt-5 max-w-xl text-lg text-muted">
          {t("trackingSection.subtitle")}
        </p>

        <div className="mt-10">
          <TrackingPanel />
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
