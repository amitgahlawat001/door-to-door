import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  onChange?: () => void;
}

const LanguageSwitcher: React.FC<Props> = ({ onChange }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    onChange?.();
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
      className="bg-white text-blue-800 rounded px-2 py-1 font-medium outline-none cursor-pointer"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="gu">ગુજરાતી</option>
    </select>
  );
};

export default LanguageSwitcher;
