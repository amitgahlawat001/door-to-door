import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import ambientLines from "../../assets/svg/ambient-lines.svg";

const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="grain relative overflow-hidden bg-ink py-28 md:py-36">
      <img
        src={ambientLines}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-30"
      />

      <div className="shell relative z-10 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-headline font-semibold text-paper">
          {t("cta.title")}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-paper/65">
          {t("cta.subtitle")}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button to="/contact">{t("cta.send")}</Button>
          <Button to="/contact" variant="ghost" className="text-paper">
            {t("cta.talk")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
