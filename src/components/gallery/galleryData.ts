import fragile from "../../assets/images/background/gallery4.jpg";
import bikeCourier from "../../assets/images/background/gallery1.jpg";
import loading from "../../assets/images/heroSectionImage/aboutUs2.jpg";
import manifest from "../../assets/images/background/gallery2.jpg";
import forklift from "../../assets/images/heroSectionImage/aboutUs1.jpg";
import scanning from "../../assets/images/heroSectionImage/tracking.jpg";
import routeSheet from "../../assets/images/background/gallery3.jpg";
import residential from "../../assets/images/heroSectionImage/servicesHeader.jpg";
import largeItem from "../../assets/images/background/gallery6.jpg";

export type GalleryCategory = "pickup" | "hub" | "transit" | "delivery";

export interface GalleryShot {
  /** i18n key suffix under `galleryPage.` */
  key: string;
  image: string;
  category: GalleryCategory;
  /** Portrait shots get a taller cell in the masonry grid. */
  tall?: boolean;
}

/** Captions describe what is actually happening in each photo. */
export const SHOTS: GalleryShot[] = [
  { key: "i1", image: fragile, category: "pickup" },
  { key: "i2", image: bikeCourier, category: "pickup", tall: true },
  { key: "i3", image: loading, category: "pickup" },
  { key: "i4", image: manifest, category: "transit", tall: true },
  { key: "i5", image: forklift, category: "hub" },
  { key: "i6", image: scanning, category: "hub" },
  { key: "i7", image: routeSheet, category: "transit" },
  { key: "i8", image: residential, category: "delivery" },
  { key: "i9", image: largeItem, category: "delivery", tall: true },
];

export const CATEGORIES: (GalleryCategory | "all")[] = [
  "all",
  "pickup",
  "hub",
  "transit",
  "delivery",
];
