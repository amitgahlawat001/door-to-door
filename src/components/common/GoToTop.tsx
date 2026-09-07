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

  // Kept mounted so it slides rather than popping. It slides on `transform`
  // and never on opacity: this is a glass surface, and animating the opacity
  // of a blurred element re-samples and re-blurs the backdrop every frame.
  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("common.backToTop")}
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`glass-dark glass-edge fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center rounded-full text-paper transition-transform duration-300 ease-premium ${
        visible
          ? "translate-y-0 hover:-translate-y-1"
          : "pointer-events-none translate-y-24"
      }`}
    >
      <FaArrowUp size={16} />
    </button>
  );
};

export default GoToTop;
