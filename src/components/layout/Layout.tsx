import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HeroSectionData from "../../config/HeroSectionData";
import GoToTop from "../common/GoToTop";

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const heroData = HeroSectionData[pathname];

  // HashRouter keeps the scroll position across routes; reset it.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar />

      {heroData && (
        <HeroSection
          title={heroData.title}
          subtitle={heroData.subtitle}
          bgImage={heroData.bgImage}
          height={heroData.height}
        />
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <GoToTop />
    </div>
  );
};

export default Layout;
