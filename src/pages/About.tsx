import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import aboutUs1 from "../assets/images/heroSectionImage/aboutUs1.jpg";
import aboutUs2 from "../assets/images/heroSectionImage/aboutUs2.jpg";
import GoToTop from "../components/common/GoToTop";

const About: React.FC = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const resize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const parallaxDistance = windowWidth < 768 ? 25 : 100;

  const y1 = useTransform(
    scrollY,
    [0, 250, 500],
    [-parallaxDistance, 0, parallaxDistance]
  );
  const y2 = useTransform(
    scrollY,
    [0, 250, 500],
    [parallaxDistance, 0, -parallaxDistance]
  );

  const teamImages = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 overflow-hidden">
          <motion.img
            src={aboutUs1}
            alt="Vision 1"
            style={{ y: y1 }}
            className="w-full md:w-1/2 h-40 md:h-64 object-cover rounded-tl-[50px] rounded-br-[50px] shadow-lg"
          />
          <motion.img
            src={aboutUs2}
            alt="Vision 2"
            style={{ y: y2 }}
            className="w-full md:w-1/2 h-40 md:h-64 object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-lg"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            {t("about.visionTitle")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("about.visionText")}
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
          {t("about.teamTitle")}
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-10">
          {t("about.teamText")}
        </p>

        <div className="flex justify-center gap-8 mb-8">
          {teamImages.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-28 h-28 rounded-full shadow-lg border-4 border-white hover:border-blue-600"
            />
          ))}
        </div>

        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          {t("about.featuresBtn")}
        </button>
      </div>

      <GoToTop />
    </section>
  );
};

export default About;
