import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import {
  MILESTONES,
  Shipment,
  TrackingResult,
  lookupShipment,
  milestoneIndex,
} from "../../lib/tracking";

/** Shared tracking UI. Used inline on the homepage and on /trackshipment. */
const TrackingPanel: React.FC = () => {
  const { t } = useTranslation();
  const reduce = useReducedMotion();
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || loading) return;
    setLoading(true);
    try {
      setResult(await lookupShipment(value));
    } catch {
      setResult({ ok: false, error: "UNAVAILABLE" });
    } finally {
      setLoading(false);
    }
  };

  const shipment = result?.ok ? result.shipment : null;
  const current = shipment ? milestoneIndex(shipment.status) : -1;

  return (
    <div className="w-full">
      <form onSubmit={submit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="tracking-id" className="sr-only">
          {t("tracking.placeholder")}
        </label>
        <input
          id="tracking-id"
          type="text"
          inputMode="text"
          autoComplete="off"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t("tracking.placeholder")}
          className="w-full flex-1 rounded-full border border-ink/10 bg-white px-6 py-4 text-lg text-ink placeholder:text-muted/70 focus:border-brand focus:outline-none"
        />
        <Button type="submit" disabled={loading} className="sm:w-auto">
          {loading ? t("tracking.searching") : t("tracking.trackBtn")}
        </Button>
      </form>

      <p className="mt-3 text-sm text-muted">{t("tracking.tip")}</p>

      <AnimatePresence mode="wait">
        {result && !result.ok && (
          <motion.div
            key={result.error}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            role="status"
            className="mt-8 rounded-2xl border border-accent/30 bg-accent/10 p-6"
          >
            <p className="font-display text-lg font-semibold text-ink">
              {t(`tracking.errors.${result.error}.title`)}
            </p>
            <p className="mt-1 text-[15px] text-muted">
              {t(`tracking.errors.${result.error}.body`)}
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-block text-sm font-semibold text-brand underline underline-offset-4"
            >
              {t("tracking.supportCta")}
            </Link>
          </motion.div>
        )}

        {shipment && (
          <motion.div
            key={shipment.id + shipment.status}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-32px_rgba(11,27,43,0.45)]"
          >
            <Summary shipment={shipment} />
            <Route current={current} reduce={!!reduce} />
            <Timeline shipment={shipment} current={current} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Summary: React.FC<{ shipment: Shipment }> = ({ shipment }) => {
  const { t } = useTranslation();

  const facts = [
    { label: t("tracking.fields.id"), value: shipment.id },
    { label: t("tracking.fields.origin"), value: shipment.origin },
    { label: t("tracking.fields.destination"), value: shipment.destination },
    { label: t("tracking.fields.eta"), value: shipment.eta ?? t("tracking.noEta") },
  ];

  return (
    <div className="grid gap-6 border-b border-ink/10 p-7 sm:grid-cols-2 lg:grid-cols-4">
      {facts.map((f) => (
        <div key={f.label}>
          <p className="text-eyebrow font-semibold uppercase text-muted">
            {f.label}
          </p>
          <p className="mt-2 font-display text-lg font-semibold text-ink">
            {f.value}
          </p>
        </div>
      ))}
    </div>
  );
};

/** Abstract hub-to-hub route; draws toward the current milestone. */
const Route: React.FC<{ current: number; reduce: boolean }> = ({
  current,
  reduce,
}) => {
  const ratio = Math.max(0, current) / (MILESTONES.length - 1);

  return (
    <div className="bg-deep px-7 py-8">
      <svg viewBox="0 0 600 90" className="w-full" aria-hidden="true">
        <path
          d="M30 60 C160 10 260 90 380 40 S540 20 570 55"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.15"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          d="M30 60 C160 10 260 90 380 40 S540 20 570 55"
          fill="none"
          stroke="#1479FF"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: ratio }}
          transition={reduce ? { duration: 0 } : { duration: 1.1, ease: "easeInOut" }}
        />
        {MILESTONES.map((_, i) => {
          const x = 30 + (540 / (MILESTONES.length - 1)) * i;
          return (
            <circle
              key={i}
              cx={x}
              cy={i % 2 ? 34 : 56}
              r={i === current ? 8 : 5}
              fill={i <= current ? "#FF7A00" : "#ffffff"}
              fillOpacity={i <= current ? 1 : 0.25}
            />
          );
        })}
      </svg>
    </div>
  );
};

const Timeline: React.FC<{ shipment: Shipment; current: number }> = ({
  shipment,
  current,
}) => {
  const { t } = useTranslation();

  return (
    <ol className="p-7">
      {MILESTONES.map((status, i) => {
        const event = shipment.events.find((e) => e.status === status);
        const done = i <= current;

        return (
          <li key={status} className="relative flex gap-5 pb-7 last:pb-0">
            {i < MILESTONES.length - 1 && (
              <span
                className={`absolute left-[7px] top-5 h-full w-px ${
                  i < current ? "bg-brand" : "bg-ink/10"
                }`}
                aria-hidden="true"
              />
            )}
            <span
              className={`relative mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 ${
                i === current
                  ? "border-accent bg-accent"
                  : done
                  ? "border-brand bg-brand"
                  : "border-ink/20 bg-white"
              }`}
              aria-hidden="true"
            />
            <div className={done ? "" : "opacity-45"}>
              <p className="font-display font-semibold text-ink">
                {t(`tracking.status.${status}`)}
                {i === current && (
                  <span className="ml-3 rounded-full bg-accent/15 px-2.5 py-0.5 align-middle text-[11px] font-semibold uppercase tracking-widest text-accent">
                    {t("tracking.now")}
                  </span>
                )}
              </p>
              {event && (
                <p className="mt-1 text-[15px] text-muted">
                  {event.hub} · {event.scannedAt}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};

export default TrackingPanel;
