import { createSlice } from "@reduxjs/toolkit";

export interface Service {
  type: string;
  /** Who the service is sold to — drives the tag on the cards. */
  audience: "consumer" | "business";
  titleKey: string;
  descriptionKey: string;
  /** Three concrete things included, listed on the service cards. */
  featureKeys: string[];
}

const withFeatures = (n: number) => [
  `services.s${n}.features.f1`,
  `services.s${n}.features.f2`,
  `services.s${n}.features.f3`,
];

const initialState: Service[] = [
  {
    type: "same_day",
    audience: "consumer",
    titleKey: "services.s1.title",
    descriptionKey: "services.s1.description",
    featureKeys: withFeatures(1),
  },
  {
    type: "scheduled",
    audience: "consumer",
    titleKey: "services.s2.title",
    descriptionKey: "services.s2.description",
    featureKeys: withFeatures(2),
  },
  {
    type: "heavy",
    audience: "consumer",
    titleKey: "services.s3.title",
    descriptionKey: "services.s3.description",
    featureKeys: withFeatures(3),
  },
  {
    type: "medical",
    audience: "business",
    titleKey: "services.s4.title",
    descriptionKey: "services.s4.description",
    featureKeys: withFeatures(4),
  },
  {
    type: "ecommerce",
    audience: "business",
    titleKey: "services.s5.title",
    descriptionKey: "services.s5.description",
    featureKeys: withFeatures(5),
  },
  {
    type: "white_glove",
    audience: "business",
    titleKey: "services.s6.title",
    descriptionKey: "services.s6.description",
    featureKeys: withFeatures(6),
  },
];

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
