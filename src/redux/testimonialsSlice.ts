import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    textKey: "testimonials.t1.text",
    authorKey: "testimonials.t1.author",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    textKey: "testimonials.t2.text",
    authorKey: "testimonials.t2.author",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    textKey: "testimonials.t3.text",
    authorKey: "testimonials.t3.author",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
});

export default testimonialsSlice.reducer;
