import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import img1 from "../assets/images/heroSectionImage/aboutUsHeader.jpg";
import aboutUs1 from "../assets/images/heroSectionImage/aboutUs1.jpg";
import aboutUs2 from "../assets/images/heroSectionImage/aboutUs2.jpg";
import HeroSection from "../components/HeroSection";

const About: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax effect for images
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  // Generic team images
  const teamImages = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/46.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
  ];

  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="Founded in the heart of New York, Start Door To Door is a customer focused courier company dedicated to reliability and speed."
        bgImage={img1}
        height="h-[400px]" // you can adjust per page
      />
      <section className="bg-white py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Parallax Images */}
          <div className="flex space-x-4">
            <motion.img
              src={aboutUs1}
              alt="Vision 1"
              style={{ y: y1 }}
              className="w-1/2 h-64 object-cover rounded-tl-[50px] rounded-br-[50px] shadow-lg"
            />
            <motion.img
              src={aboutUs2}
              alt="Vision 2"
              style={{ y: y2 }}
              className="w-1/2 h-64 object-cover rounded-tr-[50px] rounded-bl-[50px] shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Vision
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Founded in the heart of New York, Start Door To Door is a customer
              focused courier company dedicated to reliability and speed. We
              connect businesses and individuals with a seamless door to door
              delivery experience, powered by advanced routing, safety
              protocols, and real-time visibility.
            </p>
          </div>
        </div>

        {/* Professional Team Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Professional Team
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            We believe in transparency, fair pricing, and unmatched service. Our
            local team knows NYC streets and delivers with a mission to exceed
            expectations on every delivery.
          </p>
          <div className="flex justify-center space-x-8">
            {teamImages.map((img, idx) => (
              <motion.img
                key={idx}
                src={img}
                alt={`Team ${idx + 1}`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="w-32 h-32 object-cover rounded-full shadow-lg border-4 border-white hover:border-blue-600 transition-all"
              />
            ))}
          </div>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition">
            Our Features
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
