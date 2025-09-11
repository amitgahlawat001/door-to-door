// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import servicesReducer from "./servicesSlice";
import testimonialsReducer from "./testimonialsSlice";

const store = configureStore({
  reducer: {
    services: servicesReducer,
    testimonials: testimonialsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
