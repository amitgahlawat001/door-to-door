// src/redux/testimonialsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    text: "Start Door To Door consistently delivers on time with careful handling of sensitive items and excellent communication.",
    author: "Founder, GreenLeaf Furniture",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Reliable, transparent, and fast. They have become our trusted partner for last mile deliveries.",
    author: "Operations Lead, QuickCart",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Professional and courteous team. Our white glove deliveries were smooth and efficient.",
    author: "Operations Manager, Skyline Medical",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];
const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});
export default testimonialsSlice.reducer;
