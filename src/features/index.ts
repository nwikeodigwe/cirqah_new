import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
// import authReducer from "./auth/slice";
// import eventReducer from "./event/slice";
import addressReducer from "./address/slice";
import preferenceReducer from "./preferences/slice";
import cartReducer from "./cart/slice";
// import historyReducer from "./historySlice";

const rootReducer = combineReducers({
  //   auth: authReducer,
  user: userReducer,
  //   event: eventReducer,
  address: addressReducer,
  preferences: preferenceReducer,
  cart: cartReducer,
});

export default rootReducer;
