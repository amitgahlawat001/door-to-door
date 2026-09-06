import React from "react";
import { useTranslation } from "react-i18next";
import Accordion from "../common/Accordion";
import Button from "../ui/Button";

const QUESTIONS = ["q1", "q2", "q3", "q4", "q5", "q6"];

const FaqSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-soft py-24 md:py-32">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">{t("faq.eyebrow")}</p>
          <h2 className="mt-5 font-display text-headline font-semibold text-ink">
            {t("faq.title")}
          </h2>
          <Button to="/contact" variant="secondary" className="mt-8">
            {t("cta.talk")}
          </Button>
        </div>

        <Accordion
          items={QUESTIONS.map((id) => ({
            id,
            question: t(`faq.${id}.q`),
            answer: t(`faq.${id}.a`),
          }))}
        />
      </div>
    </section>
  );
};

export default FaqSection;
