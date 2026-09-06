import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import heroImage from "../../assets/images/background/bg-image.jpg";
import ambientLines from "../../assets/svg/ambient-lines.svg";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.4 } }
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as const },
        };

  return (
    <section className="grain relative flex min-h-[92vh] items-center overflow-hidden bg-deep">
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40 md:opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/85 to-deep/30" />
      <img
        src={ambientLines}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full opacity-40"
      />

      <div className="shell relative z-10 pb-24 pt-36">
        <motion.p {...rise(0)} className="eyebrow text-accent">
          {t("heroHome.eyebrow")}
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="mt-6 max-w-[16ch] font-display text-display font-semibold text-paper"
        >
          {t("heroHome.titleLead")}{" "}
          <span className="text-accent">{t("heroHome.titleAccent")}</span>
        </motion.h1>

        <motion.p
          {...rise(0.18)}
          className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70"
        >
          {t("heroHome.subtitle")}
        </motion.p>

        <motion.div {...rise(0.26)} className="mt-10 flex flex-wrap gap-4">
          <Button to="/trackshipment">{t("cta.track")}</Button>
          <Button to="/contact" variant="ghost" className="text-paper">
            {t("cta.quote")}
          </Button>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 hidden justify-center md:flex">
        <span className="flex items-center gap-3 text-eyebrow font-semibold uppercase text-paper/50">
          <span className="h-10 w-px bg-gradient-to-b from-transparent to-paper/50" />
          {t("heroHome.scrollCue")}
        </span>
      </div>
    </section>
  );
};

export default Hero;
