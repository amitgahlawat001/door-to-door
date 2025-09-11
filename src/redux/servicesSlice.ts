// src/redux/servicesSlice.ts
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    title: "Same Day Delivery",
    description:
      "Pickup and deliver within hours across NYC with real-time tracking and insured shipments.",
  },
  {
    title: "Scheduled & Time Window Deliveries",
    description:
      "Flexible pickup times and precise delivery windows for your business calendar.",
  },
  {
    title: "Large and Heavy Item Delivery",
    description:
      "Furniture, appliances, bulky shipments with inside delivery and setup options.",
  },
  {
    title: "Medical and Sensitive Item Courier",
    description:
      "Secure handling for medical samples, legal documents, with chain of custody.",
  },
  {
    title: "E-Commerce & Retail Fulfillment",
    description:
      "Streamlined order pickups, last mile delivery, easy returns for retail.",
  },
  {
    title: "White-Glove Delivery & Installation",
    description:
      "Premium inside delivery, unboxing, setup, and packaging removal.",
  },
];
const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});
export default servicesSlice.reducer;
