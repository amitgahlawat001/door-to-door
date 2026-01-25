import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaShieldAlt, FaStar, FaTruck, FaUsers } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import Tracking from "./Tracking";
import GoToTop from "../components/common/GoToTop";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();

  const testimonials: any = useSelector(
    (state: RootState) => state.testimonials
  );

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const parallaxDistance = windowWidth < 768 ? 30 : 100;
  const scrollRange = [0, 250, 500];

  const y1 = useTransform(scrollY, scrollRange, [
    -parallaxDistance,
    0,
    parallaxDistance,
  ]);
  const y2 = useTransform(scrollY, scrollRange, [
    parallaxDistance,
    0,
    -parallaxDistance,
  ]);

  return (
    <div className="relative overflow-hidden">
      <Tracking />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-4 overflow-hidden">
              <motion.img
                src="//images.pexels.com/photos/4604661/pexels-photo-4604661.jpeg"
                style={{ y: y1 }}
                className="rounded-lg shadow-lg w-full"
              />
              <motion.img
                src="//images.pexels.com/photos/4604599/pexels-photo-4604599.jpeg"
                style={{ y: y2 }}
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div>
              <p className="text-blue-600 uppercase font-bold mb-2">
                {t("home.about")}
              </p>

              <h2 className="text-3xl font-extrabold mb-4">
                {t("home.aboutTitle")}
              </h2>

              <p className="text-gray-700 mb-6">{t("home.aboutDesc")}</p>

              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-blue-600 text-2xl" />
                  <span>{t("home.secureDelivery")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaTruck className="text-blue-600 text-2xl" />
                  <span>{t("home.fastService")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-blue-600 uppercase font-bold mb-2">
                {t("home.whyChoose")}
              </p>

              <h2 className="text-3xl font-extrabold mb-4">
                {t("home.whyTitle")}
              </h2>

              <p className="text-gray-700 mb-6">{t("home.whyDesc")}</p>

              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <FaUsers className="text-blue-600 text-2xl" />
                  <span>{t("home.reliableTeam")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-blue-600 text-2xl" />
                  <span>{t("home.guaranteedSafety")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">{t("home.testimonialsTitle")}</h2>
          <p className="text-gray-600 mt-2">{t("home.testimonialsDesc")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((tItem: any, i: number) => (
            <div key={i} className="text-center">
              <p className="italic">{t(tItem.textKey)}</p>
              <h4 className="mt-2 font-semibold">{t(tItem.authorKey)}</h4>
            </div>
          ))}
        </div>
      </section>

      <GoToTop />
    </div>
  );
};

export default Home;
