import React, { useCallback, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";
import Button from "../ui/Button";
import { company } from "../../config/siteContent";
import { useDialog } from "../../hooks/useDialog";

const links = [
  { to: "/services", key: "services" },
  { to: "/about", key: "about" },
  { to: "/gallery", key: "gallery" },
  { to: "/contact", key: "contact" },
];

const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation; the hook handles scroll lock, Escape,
  // the focus trap and returning focus to the menu button.
  useEffect(() => setOpen(false), [location.pathname]);
  const close = useCallback(() => setOpen(false), []);
  const drawer = useDialog<HTMLDivElement>(open, close);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Floating pill rather than a full-bleed bar: the shell supplies the
          side inset and the 1240px cap, and the glass sits inside it. Radius
          goes on the glass element itself — a rounded wrapper with overflow
          hidden clips the backdrop-filter wrongly in Safari. */}
      <div
        className={`shell transition-all duration-500 ease-premium ${
          scrolled ? "pt-2.5" : "pt-4"
        }`}
      >
        <div
          className={`glass-dark glass-edge grid grid-cols-[auto_1fr] items-center gap-4 rounded-full py-2 pl-4 pr-2 transition-all duration-500 ease-premium lg:grid-cols-[1fr_auto_1fr] lg:pl-6 ${
            scrolled ? "shadow-[0_14px_44px_-14px_rgb(0_0_0/0.6)]" : ""
          }`}
        >
          <Link
            to="/"
            className="flex items-center gap-2.5 justify-self-start text-paper"
            aria-label={company.name}
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-ink">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                <path
                  d="M3 8l9-4 9 4-9 4-9-4zm0 0v8l9 4 9-4V8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-display text-[17px] font-semibold tracking-tight">
              {company.shortName}
            </span>
          </Link>

          <nav
            className="hidden items-center gap-8 justify-self-center lg:flex"
            aria-label="Main"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-accent" : "text-paper/80 hover:text-paper"
                  }`
                }
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 justify-self-end lg:flex">
            <LanguageSwitcher />
            <Button to="/trackshipment" className="!px-6 !py-2.5 !text-sm">
              {t("nav.trackShipment")}
            </Button>
          </div>

          <div className="flex items-center gap-3 justify-self-end lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t("nav.openMenu")}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-paper"
            >
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && [
          <motion.div
            key="scrim"
            className="fixed inset-0 z-40 bg-deep/70 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />,
          <motion.div
            key="drawer"
            ref={drawer}
            role="dialog"
            aria-modal="true"
            aria-label={t("nav.openMenu")}
            className="glass-dark glass-edge fixed inset-y-0 right-0 z-50 flex w-[86%] max-w-sm flex-col rounded-l-3xl px-8 py-6 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "tween",
              duration: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("nav.closeMenu")}
              className="self-end p-2 text-paper"
            >
              <FiX size={24} />
            </button>

            <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
              {[{ to: "/", key: "home" }, ...links].map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `block border-b border-white/10 py-4 font-display text-2xl ${
                        isActive ? "text-accent" : "text-paper"
                      }`
                    }
                  >
                    {t(`nav.${link.key}`)}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <Button to="/trackshipment" className="mt-8 w-full">
              {t("nav.trackShipment")}
            </Button>

            <LanguageSwitcher className="mt-6" />
          </motion.div>,
        ]}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
