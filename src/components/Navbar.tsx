import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/trackshipment", label: "Track Shipment" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => (
  <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg p-4">
    <div className="container mx-auto flex justify-between items-center">
      <span className="text-2xl font-extrabold tracking-wide text-white hover:scale-105 transform transition duration-300 cursor-pointer">
        Start Door To Door
      </span>

      <div className="flex space-x-6">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} end={link.to === "/"}>
            {/* children-as-function gives us isActive here */}
            {({ isActive }: { isActive: boolean }) => (
              <span
                className={`group relative font-medium transition duration-300 cursor-pointer ${
                  isActive
                    ? "text-yellow-300"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-300 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  </nav>
);

export default Navbar;
