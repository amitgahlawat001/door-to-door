import React, { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HeroSectionData from "../../config/HeroSectionData";
import GoToTop from "../common/GoToTop";

const Layout: React.FC = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const heroData = HeroSectionData[pathname];
  const main = useRef<HTMLElement>(null);
  const first = useRef(true);

  useEffect(() => {
    // HashRouter keeps the scroll position across routes; reset it. Moving
    // focus to <main> too, so a screen reader announces the new page instead
    // of leaving the cursor on the link that was just clicked.
    window.scrollTo(0, 0);
    if (first.current) {
      first.current = false;
      return;
    }
    main.current?.focus();
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      {/* A plain `href="#main"` would be swallowed by HashRouter as a route, so
          the skip link moves focus itself. */}
      <button
        type="button"
        onClick={() => main.current?.focus()}
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[70] focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
      >
        {t("common.skipToContent")}
      </button>

      <Navbar />

      {heroData && (
        <HeroSection
          title={heroData.title}
          subtitle={heroData.subtitle}
          bgImage={heroData.bgImage}
          height={heroData.height}
        />
      )}

      <main id="main" ref={main} tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>

      <Footer />
      <GoToTop />
    </div>
  );
};

export default Layout;
