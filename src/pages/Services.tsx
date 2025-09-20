import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  FaShippingFast,
  FaBoxOpen,
  FaTruckMoving,
  FaShoppingCart,
  FaHandsHelping,
} from "react-icons/fa";
import { MdMedicalServices, MdSchedule } from "react-icons/md";

const getServiceIcon = (title: string) => {
  if (title.toLowerCase().includes("same day")) return <FaShippingFast />;
  if (
    title.toLowerCase().includes("scheduled") ||
    title.toLowerCase().includes("time")
  )
    return <MdSchedule />;
  if (
    title.toLowerCase().includes("heavy") ||
    title.toLowerCase().includes("large")
  )
    return <FaTruckMoving />;
  if (
    title.toLowerCase().includes("medical") ||
    title.toLowerCase().includes("sensitive")
  )
    return <MdMedicalServices />;
  if (
    title.toLowerCase().includes("e-commerce") ||
    title.toLowerCase().includes("retail")
  )
    return <FaShoppingCart />;
  if (
    title.toLowerCase().includes("white-glove") ||
    title.toLowerCase().includes("installation")
  )
    return <FaHandsHelping />;
  return <FaBoxOpen />; // default icon
};

const Services: React.FC = () => {
  const services = useSelector((state: RootState) => state.services);

  return (
    <>
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Delivery Services Overview
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We offer a full spectrum of courier solutions designed for businesses
          and individuals. Whether you need urgent same day service or reliable
          scheduled deliveries, Start Door To Door provides secure handling,
          live tracking, and competitive pricing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: any, i: number) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl shadow-md p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-center md:justify-self-start justify-self-center justify-center w-14 h-14 rounded-full bg-blue-100 mb-4 group-hover:bg-blue-600 transition-colors text-2xl">
                <span className="text-blue-600 group-hover:text-white transition-colors">
                  {getServiceIcon(service.title)}
                </span>
              </div>

              <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
