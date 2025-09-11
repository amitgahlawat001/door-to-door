import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import bgImage from "../assets/images/background/bg-image.jpg";
import { FaShieldAlt, FaStar, FaTruck, FaUsers } from "react-icons/fa";

const Home: React.FC = () => {
  const testimonials: any = useSelector(
    (state: RootState) => state.testimonials
  );

  const features = [
    {
      title: "Real-time Tracking",
      desc: "Track your package live from pickup to delivery.",
      icon: "🚚",
    },
    {
      title: "Transparent Pricing",
      desc: "Fair, upfront costs with no hidden fees.",
      icon: "💰",
    },
    {
      title: "Local NYC Expertise",
      desc: "Experienced couriers who know the city inside out.",
      icon: "📍",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        title="Delivery In Action"
        subtitle="Explore how we bring reliability and speed to every delivery — from same-day shipping to specialized services."
        bgImage={bgImage}
        height="h-[60vh]"
      />

      {/* Features Section */}
      <section className="py-12 px-4 md:px-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-xl p-6 bg-white shadow-lg cursor-pointer hover:shadow-2xl transition-shadow text-center"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / Why Choose Us Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="//images.pexels.com/photos/4604661/pexels-photo-4604661.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="delivery"
                className="rounded-lg shadow-lg"
              />
              <img
                src="//images.pexels.com/photos/4604599/pexels-photo-4604599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="courier"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-blue-600 uppercase font-bold mb-2">About Us</p>
              <h2 className="text-3xl font-extrabold mb-4">
                From Pickup To Delivery, We Move Your Packages Securely
              </h2>
              <p className="text-gray-700 mb-6">
                Whether you are sending documents across town or large shipments
                to clients, we tailor our service to fit your schedule and
                budget.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-blue-600 text-2xl" />
                  <span>Secure Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaTruck className="text-blue-600 text-2xl" />
                  <span>Fast Service</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <p className="text-blue-600 uppercase font-bold mb-2">
                Why Choose Us
              </p>
              <h2 className="text-3xl font-extrabold mb-4">
                Trusted By Hundreds Of Clients
              </h2>
              <p className="text-gray-700 mb-6">
                Our fleet includes bikes, cars, and vans to ensure fast,
                efficient delivery no matter the size of your shipment.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-2">
                  <FaUsers className="text-blue-600 text-2xl" />
                  <span>Reliable Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FaShieldAlt className="text-blue-600 text-2xl" />
                  <span>Guaranteed Safety</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
              <img
                src="//images.pexels.com/photos/4604654/pexels-photo-4604654.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="secure"
                className="rounded-lg shadow-lg"
              />
              <img
                src="//images.pexels.com/photos/4604668/pexels-photo-4604668.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                alt="team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Customer Testimonials
          </h2>
          <p className="text-gray-600 mt-2">
            What our clients say about working with Start Door To Door.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t: any, i: number) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative w-full bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-gray-100">
                <div className="flex justify-center mb-3 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                <p className="italic">"{t.text}"</p>
                <div className="absolute left-1/2 -bottom-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white group-hover:border-t-gray-900 transform -translate-x-1/2"></div>
              </div>
              <div className="mt-8">
                <motion.img
                  src={t.image}
                  alt={t.author}
                  className="w-16 h-16 rounded-full mx-auto border-4 border-transparent group-hover:border-blue-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                />
                <p className="mt-3 text-sm uppercase text-gray-500 font-medium">
                  {t.role}
                </p>
                <h4 className="text-lg font-semibold mt-1">{t.author}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
