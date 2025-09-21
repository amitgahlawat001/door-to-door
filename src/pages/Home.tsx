import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaShieldAlt, FaStar, FaTruck, FaUsers } from "react-icons/fa";
import Tracking from "./Tracking";
import GoToTop from "../components/common/GoToTop";

const Home: React.FC = () => {
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
  const yRange1 = [-parallaxDistance, 0, parallaxDistance];
  const yRange2 = [parallaxDistance, 0, -parallaxDistance];

  const y1 = useTransform(scrollY, scrollRange, yRange1);
  const y2 = useTransform(scrollY, scrollRange, yRange2);

  return (
    <div className="relative overflow-hidden">
      {/* <Tracking /> */}

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Section 1 */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="grid grid-cols-2 gap-4 overflow-hidden">
              {/* Add overflow-hidden to container */}
              <motion.img
                src={
                  "//images.pexels.com/photos/4604661/pexels-photo-4604661.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                }
                alt="Vision 1"
                style={{ y: y1 }}
                className="rounded-lg shadow-lg w-full"
              />
              <motion.img
                src={
                  "//images.pexels.com/photos/4604599/pexels-photo-4604599.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                }
                alt="Vision 2"
                style={{ y: y2 }}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div>
              {/* text content */}
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
            <div className="grid grid-cols-2 gap-4 order-1 md:order-2 overflow-hidden">
              <motion.img
                src={
                  "//images.pexels.com/photos/4604654/pexels-photo-4604654.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                }
                alt="Vision 1"
                style={{ y: y1 }}
                className="rounded-lg shadow-lg w-full"
              />
              <motion.img
                src={
                  "//images.pexels.com/photos/4604668/pexels-photo-4604668.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
                }
                alt="Vision 2"
                style={{ y: y2 }}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              {/* Message Card */}
              <div className="relative w-full bg-white rounded-lg shadow-md p-6 transition-all duration-300 group-hover:bg-gray-900 group-hover:text-gray-100">
                {/* Stars */}
                <div className="flex justify-center mb-3 text-yellow-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <FaStar key={idx} />
                  ))}
                </div>
                {/* Testimonial Text */}
                <p className="italic">"{t.text}"</p>
                {/* Pointer / arrow */}
                <div className="absolute left-1/2 -bottom-3 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white group-hover:border-t-gray-900 transform -translate-x-1/2"></div>
              </div>

              {/* Client Info */}
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
      <GoToTop />
    </div>
  );
};

export default Home;
