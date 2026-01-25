import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-left">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.overviewTitle")}
          </h3>
          <p className="text-sm leading-relaxed">{t("footer.overviewText")}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.contactTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>📍 {t("footer.headOffice")}</li>
            <li>📞 {t("footer.phone")}</li>
            <li>✉️ {t("footer.email")}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            {t("footer.servicesTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>{t("footer.service1")}</li>
            <li>{t("footer.service2")}</li>
            <li>{t("footer.service3")}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-5">
        <p className="text-sm text-gray-400">
          Copyright {new Date().getFullYear()} All Rights Reserved.
        </p>

        <div className="flex space-x-4">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
          >
            <FaFacebookF className="w-4 h-4" />
          </a>
          <a
            href="https://x.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
          >
            <FaTwitter className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-700 transition-colors"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
