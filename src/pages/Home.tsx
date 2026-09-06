import React, { Suspense, lazy } from "react";
import Hero from "../components/home/Hero";
import TrustStrip from "../components/home/TrustStrip";
import TrackingSection from "../components/home/TrackingSection";
import HowItWorks from "../components/home/HowItWorks";
import ServicesSection from "../components/home/ServicesSection";
import NetworkSection from "../components/home/NetworkSection";
import WhyUs from "../components/home/WhyUs";
import Testimonials from "../components/home/Testimonials";
import FaqSection from "../components/home/FaqSection";
import CTASection from "../components/home/CTASection";

// GSAP only ships to browsers that scroll far enough to need the story.
const ScrollStory = lazy(() => import("../components/home/ScrollStory"));

const Home: React.FC = () => (
  <>
    <Hero />
    <TrustStrip />
    <Suspense fallback={<div className="h-screen bg-deep" />}>
      <ScrollStory />
    </Suspense>
    <TrackingSection />
    <HowItWorks />
    <ServicesSection />
    <NetworkSection />
    <WhyUs />
    <Testimonials />
    <FaqSection />
    <CTASection />
  </>
);

export default Home;
