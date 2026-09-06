import React from "react";
import { useTranslation } from "react-i18next";

interface Props {
  onChange?: () => void;
}

const LanguageSwitcher: React.FC<Props> = ({ onChange }) => {
  const { t, i18n } = useTranslation();

  return (
    <select
      aria-label={t("nav.language")}
      value={i18n.language}
      onChange={(e) => {
        i18n.changeLanguage(e.target.value);
        onChange?.();
      }}
      className="cursor-pointer rounded-full border border-white/20 bg-transparent px-3 py-1.5 text-sm font-medium text-paper outline-none [&>option]:text-ink"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="gu">ગુજરાતી</option>
    </select>
  );
};

export default LanguageSwitcher;
