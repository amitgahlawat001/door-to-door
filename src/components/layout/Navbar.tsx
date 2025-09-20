import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Home" },
  { to: "/trackshipment", label: "Track Shipment" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-extrabold tracking-wide text-white hover:scale-105 transform transition duration-300 cursor-pointer">
            Start Door To Door
          </span>

          {/* Hamburger button - visible on small screens */}
          <button
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Nav links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
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

      {/* Mobile drawer menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-blue-700 to-indigo-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          {/* Close button inside drawer */}
          <button
            className="self-end text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {({ isActive }: { isActive: boolean }) => (
                <span
                  onClick={toggleMenu}
                  className={`block font-medium text-lg cursor-pointer ${
                    isActive
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {link.label}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay behind drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
