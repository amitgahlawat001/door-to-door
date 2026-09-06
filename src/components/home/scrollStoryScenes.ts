import labelling from "../../assets/images/background/gallery4.jpg";
import courier from "../../assets/images/background/gallery1.jpg";
import warehouseScene from "../../assets/images/heroSectionImage/aboutUs1.jpg";
import vanInterior from "../../assets/images/background/gallery3.jpg";
import loadingVan from "../../assets/images/background/gallery2.jpg";
import doorstep from "../../assets/images/background/gallery6.jpg";

import secure from "../../assets/svg/secure.svg";
import pickup from "../../assets/svg/pickup.svg";
import warehouse from "../../assets/svg/warehouse.svg";
import transit from "../../assets/svg/transit.svg";
import tracking from "../../assets/svg/tracking.svg";
import delivery from "../../assets/svg/delivery.svg";

export interface Scene {
  /** i18n key suffix under `story.` */
  key: string;
  image: string;
  icon: string;
  /** Timeline start position, 0-100, matching the animation spec. */
  at: number;
}

/**
 * V1 story: still scenes + SVG motion. See ScrollStory.tsx for how to swap
 * these for a scrubbed video or frame sequence later.
 */
export const SCENES: Scene[] = [
  { key: "package", image: labelling, icon: secure, at: 0 },
  { key: "pickup", image: courier, icon: pickup, at: 15 },
  { key: "sorting", image: warehouseScene, icon: warehouse, at: 30 },
  { key: "transit", image: vanInterior, icon: transit, at: 45 },
  { key: "outForDelivery", image: loadingVan, icon: tracking, at: 65 },
  { key: "delivered", image: doorstep, icon: delivery, at: 82 },
];
