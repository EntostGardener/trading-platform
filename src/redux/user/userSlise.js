import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  email: null,
  access_token: null,
  product_in_cart: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn(state, action) {
      return {
        ...state,
        email: action.payload.email,
        access_token: action.payload.access_token,
      };
    },
    logOut: (state) => {
      return {
        ...state,
        email: null,
        access_token: null,
        product_in_cart: [],
      };
    },
  },
});

export const {logIn, logOut} = userSlice.actions;

export default userSlice.reducer;
