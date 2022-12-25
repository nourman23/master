import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Reducers/userReducer.js";
import TestimonialReducer from "./Reducers/TestimonialReducer.js";

export const store = configureStore({
  reducer: {
    Users: UserReducer,
    Testimonials: TestimonialReducer,
  },
});
