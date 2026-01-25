import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../common/LanguageSwitcher";

const links = [
  { to: "/", key: "home" },
  { to: "/trackshipment", key: "trackShipment" },
  { to: "/about", key: "about" },
  { to: "/services", key: "services" },
  { to: "/gallery", key: "gallery" },
  { to: "/contact", key: "contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-700 to-indigo-800 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <span className="text-2xl font-extrabold text-white">
            Start Door To Door
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {({ isActive }) => (
                  <span
                    className={`font-medium transition ${
                      isActive
                        ? "text-yellow-300"
                        : "text-white hover:text-yellow-300"
                    }`}
                  >
                    {t(`nav.${link.key}`)}
                  </span>
                )}
              </NavLink>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-3 md:hidden">
            {/* Language Switcher (Mobile) */}
            <LanguageSwitcher />

            {/* Hamburger */}
            <button
              className="text-white text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-blue-700 to-indigo-800 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col space-y-6">
          <button className="self-end text-white text-xl" onClick={toggleMenu}>
            ✕
          </button>

          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {({ isActive }) => (
                <span
                  onClick={toggleMenu}
                  className={`block text-lg font-medium ${
                    isActive
                      ? "text-yellow-300"
                      : "text-white hover:text-yellow-300"
                  }`}
                >
                  {t(`nav.${link.key}`)}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Navbar;
