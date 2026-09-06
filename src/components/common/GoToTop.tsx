import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const GoToTop: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("common.backToTop")}
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-paper shadow-lg transition-all duration-300 ease-premium hover:-translate-y-1 hover:bg-brand"
    >
      <FaArrowUp size={16} />
    </button>
  );
};

export default GoToTop;
