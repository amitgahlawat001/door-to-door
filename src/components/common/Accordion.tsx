import React, { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface Props {
  items: AccordionItem[];
  /** Index open on first render, or null for all closed. */
  defaultOpen?: number | null;
}

const Accordion: React.FC<Props> = ({ items, defaultOpen = 0 }) => {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const reduce = useReducedMotion();
  const base = useId();

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${base}-panel-${i}`;
        const buttonId = `${base}-button-${i}`;

        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="group flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display text-lg font-semibold text-ink transition-colors duration-300 group-hover:text-brand">
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-500 ease-premium ${
                    isOpen ? "rotate-45 border-accent bg-accent" : "group-hover:border-brand"
                  }`}
                >
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5">
                    <path
                      d="M8 1v14M1 8h14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
                  }
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-muted">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
