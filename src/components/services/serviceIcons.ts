import transit from "../../assets/svg/transit.svg";
import pickup from "../../assets/svg/pickup.svg";
import warehouse from "../../assets/svg/warehouse.svg";
import secure from "../../assets/svg/secure.svg";
import delivery from "../../assets/svg/delivery.svg";
import support from "../../assets/svg/support.svg";

/** One icon per service `type` in redux/servicesSlice.ts. */
export const SERVICE_ICONS: Record<string, string> = {
  same_day: transit,
  scheduled: pickup,
  heavy: warehouse,
  medical: secure,
  ecommerce: delivery,
  white_glove: support,
};
