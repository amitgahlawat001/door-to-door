import React from "react";
import gallery1 from "../assets/images/background/gallery1.jpg";
import gallery2 from "../assets/images/background/gallery2.jpg";
import gallery3 from "../assets/images/background/gallery3.jpg";
import gallery4 from "../assets/images/background/gallery4.jpg";
import gallery5 from "../assets/images/heroSectionImage/aboutUs2.jpg";
import gallery6 from "../assets/images/background/gallery6.jpg";
import GoToTop from "../components/common/GoToTop";
import { useTranslation } from "react-i18next";

const galleryData = [
  {
    titleKey: "services.s1.title",
    image: gallery1,
  },
  {
    titleKey: "services.s2.title",
    image: gallery2,
  },
  {
    titleKey: "services.s3.title",
    image: gallery3,
  },
  {
    titleKey: "services.s4.title",
    image: gallery4,
  },
  {
    titleKey: "services.s5.title",
    image: gallery5,
  },
  {
    titleKey: "services.s6.title",
    image: gallery6,
  },
];

const Gallery: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          {t("hero.gallery.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {galleryData.map((item, i) => (
            <div
              key={i}
              className="group relative h-60 overflow-hidden rounded-lg shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={t(item.titleKey)}
                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Title */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center">
                <h3
                  className="text-xl md:text-2xl font-semibold text-white text-center drop-shadow-lg 
                transform transition-all duration-500 group-hover:-translate-y-4 group-hover:scale-110"
                >
                  {t(item.titleKey)}
                </h3>
              </div>
            </div>
          ))}
        </div>
        <GoToTop />
      </section>
    </>
  );
};

export default Gallery;
