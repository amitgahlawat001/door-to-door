import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HeroSectionData from "../../config/HeroSectionData";

const Layout: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const heroData = HeroSectionData[path];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {heroData && (
        <HeroSection
          title={heroData.title}
          subtitle={heroData.subtitle}
          bgImage={heroData.bgImage}
          height={heroData.height}
        />
      )}

      <main className="flex-1 container mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
