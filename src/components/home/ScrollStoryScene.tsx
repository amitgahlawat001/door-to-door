import React from "react";
import { useTranslation } from "react-i18next";
import { Scene } from "./scrollStoryScenes";

interface Props {
  scene: Scene;
  index: number;
}

/** One layer of the pinned story stage. GSAP drives opacity/scale on `.story-scene`. */
const ScrollStoryScene: React.FC<Props> = ({ scene, index }) => {
  const { t } = useTranslation();

  return (
    <div
      className="story-scene absolute inset-0 overflow-hidden rounded-3xl"
      aria-hidden="true"
    >
      <img
        src={scene.image}
        alt=""
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/45 to-deep/10" />

      <div className="glass glass-strong glass-edge absolute left-6 top-6 flex items-center gap-3 rounded-full px-4 py-2 md:left-8 md:top-8">
        <img src={scene.icon} alt="" className="h-5 w-5" />
        <span className="text-eyebrow font-semibold uppercase text-ink">
          {t(`story.${scene.key}.label`)}
        </span>
      </div>
    </div>
  );
};

export default ScrollStoryScene;
