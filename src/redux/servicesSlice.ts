import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    type: "same_day",
    titleKey: "services.s1.title",
    descriptionKey: "services.s1.description",
  },
  {
    type: "scheduled",
    titleKey: "services.s2.title",
    descriptionKey: "services.s2.description",
  },
  {
    type: "heavy",
    titleKey: "services.s3.title",
    descriptionKey: "services.s3.description",
  },
  {
    type: "medical",
    titleKey: "services.s4.title",
    descriptionKey: "services.s4.description",
  },
  {
    type: "ecommerce",
    titleKey: "services.s5.title",
    descriptionKey: "services.s5.description",
  },
  {
    type: "white_glove",
    titleKey: "services.s6.title",
    descriptionKey: "services.s6.description",
  },
];

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlice.reducer;
