import { createSlice } from "@reduxjs/toolkit";

export type Auth = {
  email: string;
  name: string;
  email_verified: boolean;
  phone_verified: boolean;
  sub: string;
};

const initialState: Auth = {
  sub: "",
  name: "",
  email: "",
  email_verified: false,
  phone_verified: false,
};

const Slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    set_auth: (state, action) => {
      Object.assign(state, action.payload);
    },
    clear_auth: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { set_auth, clear_auth } = Slice.actions;

export default Slice.reducer;
