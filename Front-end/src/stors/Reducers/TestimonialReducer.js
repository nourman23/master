import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTestimonials = createAsyncThunk(
  "TestimonialSlice/getTestimonials",
  async () => {
    return axios
      .get("http://127.0.0.1:8000/api/showTesimonials")
      .then((res) => res.data)
      .catch((error) => console.log(error));
  }
);

const initialState = {
  testimonials: [],
};

export const TestimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    // createTestimonial: (state, { payload }) => {
    //   // state.testimonials.push(payload);
    //   // return state;
    // },
    // updateTestimonial: (state, action) => {},
    // deleteTestimonial: (state, { payload }) => {
    //   // state.testimonials = state.testimonials.filter((testimonial) => testimonial.id !== payload);
    // },
    createTestimonial: (state, action) => {},
    updateTestimonial: (state, action) => {},
    deleteTestimonial: (state, action) => {},
  },
  extraReducers: {
    [getTestimonials.pending]: (state) => {
      state.status = "Pending";
    },

    [getTestimonials.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
    },

    [getTestimonials.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const { createTestimonial, updateTestimonial, deleteTestimonial } =
  TestimonialSlice.actions;

export default TestimonialSlice.reducer;
