import React from "react";
import gallery1 from "../assets/images/background/gallery1.jpg";
import gallery2 from "../assets/images/background/gallery2.jpg";
import gallery3 from "../assets/images/background/gallery3.jpg";
import gallery4 from "../assets/images/background/gallery4.jpg";
import gallery5 from "../assets/images/heroSectionImage/aboutUs2.jpg";
import gallery6 from "../assets/images/background/gallery6.jpg";
import headerImg from "../assets/images/heroSectionImage/gallery.jpg";
import HeroSection from "../components/HeroSection";

const galleryData = [
  {
    title: "Same Day Delivery",
    image: gallery1,
  },
  {
    title: "Scheduled & Time Window Deliveries",
    image: gallery2,
  },
  {
    title: "Large And Heavy Item Delivery",
    image: gallery3,
  },
  {
    title: "Medical And Sensitive Item Courier",
    image: gallery4,
  },
  {
    title: "E-Commerce & Retail Fulfillment",
    image: gallery5,
  },
  {
    title: "White-Glove Delivery & Installation",
    image: gallery6,
  },
];

const Gallery: React.FC = () => (
  <>
    <HeroSection
      title="Delivery In Action"
      subtitle="Explore how we bring reliability and speed to every delivery — from same-day shipping to specialized services."
      bgImage={headerImg}
      height="h-[350px]"
    />
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Delivery In Action
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
              alt={item.title}
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
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Gallery;
