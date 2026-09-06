import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CAN = ["can1", "can2", "can3", "can4", "can5"];
const CANT = ["cant1", "cant2", "cant3", "cant4", "cant5"];
const PACK = ["pack1", "pack2", "pack3", "pack4"];

const Check = () => (
  <svg viewBox="0 0 20 20" className="mt-[3px] h-4 w-4 shrink-0 text-brand" aria-hidden="true">
    <path
      d="m4 10.5 4 4 8-9"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Cross = () => (
  <svg viewBox="0 0 20 20" className="mt-[3px] h-4 w-4 shrink-0 text-accent" aria-hidden="true">
    <path
      d="M5 5l10 10M15 5L5 15"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
  </svg>
);

/**
 * What the courier will and will not carry, plus packing advice.
 * The restrictions follow standard dangerous-goods transport rules.
 */
const SendGuidelines: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="shell">
        <p className="eyebrow">{t("sending.eyebrow")}</p>
        <h2 className="mt-5 max-w-2xl font-display text-headline font-semibold text-ink">
          {t("sending.title")}
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {[
            { key: "can", title: t("sending.canTitle"), rows: CAN, Icon: Check },
            { key: "cant", title: t("sending.cantTitle"), rows: CANT, Icon: Cross },
          ].map((col, i) => (
            <motion.div
              key={col.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-ink/10 bg-white p-8"
            >
              <h3 className="text-eyebrow font-semibold uppercase text-muted">
                {col.title}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {col.rows.map((row) => (
                  <li key={row} className="flex items-start gap-3 text-[15px] text-ink/85">
                    <col.Icon />
                    {t(`sending.${row}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
          {t("sending.note")}
        </p>

        <div className="mt-16 rounded-2xl bg-deep p-8 md:p-12">
          <h3 className="font-display text-2xl font-semibold text-paper">
            {t("sending.packTitle")}
          </h3>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PACK.map((step, i) => (
              <li key={step}>
                <span className="font-display text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-[15px] leading-relaxed text-paper/70">
                  {t(`sending.${step}`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default SendGuidelines;
