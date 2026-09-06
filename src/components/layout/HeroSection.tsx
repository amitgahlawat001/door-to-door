import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  height?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  bgImage,
  height = "h-[52vh] min-h-[380px]",
}) => {
  const { t } = useTranslation();

  return (
    <section
      className={`grain relative flex items-end overflow-hidden bg-deep ${height}`}
    >
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/70 to-deep/30" />

      <div className="shell relative z-10 pb-14 pt-28">
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl font-display text-headline font-semibold text-paper"
        >
          {t(title)}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-2xl text-lg text-paper/70"
          >
            {t(subtitle)}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
