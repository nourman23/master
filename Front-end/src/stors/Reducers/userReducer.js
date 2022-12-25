import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("UserSlice/getUsers", async () => {
  return axios
    .get("http://127.0.0.1:8000/api/showUsers")
    .then((res) => res.data)
    .catch((error) => console.log(error));
});

const initialState = {
  users: [],
};

export const UserSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // createUser: (state, { payload }) => {
    //   // state.users.push(payload);
    //   // return state;
    // },
    // updateUser: (state, action) => {},
    // deleteUser: (state, { payload }) => {
    //   // state.users = state.users.filter((user) => user.id !== payload);
    // },
    createUser: (state, action) => {},
    updateUser: (state, action) => {},
    deleteUser: (state, action) => {},
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "Pending";
    },

    [getUsers.fulfilled]: (state, action) => {
      state.status = "Fulfilled";
      state.data = action.payload;
    },

    [getUsers.rejected]: (state) => {
      state.status = "Rejected";
    },
  },
});

export const { createUser, updateUser, deleteUser } = UserSlice.actions;

export default UserSlice.reducer;
