import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import TrackingPanel from "../components/tracking/TrackingPanel";

const STATUSES = ["s1", "s2", "s3", "s4", "s5", "s6"];
const HELP = ["help1", "help2", "help3"];

const Tracking: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="bg-soft py-20 md:py-28">
        <div className="shell max-w-3xl">
          <h2 className="font-display text-headline font-semibold text-ink">
            {t("tracking.title")}
          </h2>
          <p className="mt-4 text-lg text-muted">{t("tracking.subtitle")}</p>

          <div className="mt-10">
            <TrackingPanel />
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">
              {t("trackingHelp.statusTitle")}
            </h3>
            <ul className="mt-8 space-y-5">
              {STATUSES.map((s, i) => (
                <motion.li
                  key={s}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex gap-4 text-[15px] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
                      s === "s6" ? "bg-accent" : "bg-brand"
                    }`}
                  />
                  {t(`trackingHelp.${s}`)}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-soft p-8">
            <h3 className="font-display text-xl font-semibold text-ink">
              {t("trackingHelp.helpTitle")}
            </h3>
            <ul className="mt-6 space-y-4">
              {HELP.map((h) => (
                <li key={h} className="text-[15px] leading-relaxed text-muted">
                  {t(`trackingHelp.${h}`)}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[15px] text-muted">
              {t("tracking.trouble")}{" "}
              <Link
                to="/contact"
                className="font-semibold text-brand underline underline-offset-4"
              >
                {t("tracking.supportCta")}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tracking;
