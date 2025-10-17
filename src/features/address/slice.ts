import { createSlice } from "@reduxjs/toolkit";

export type AddressStateType = {
  home_address?: string;
  home_address_2?: string;
  home_city?: string;
  home_state?: string;
  home_country?: string;
  home_postal_code?: string;
  billing_address?: string;
  billing_address_2?: string;
  billing_city?: string;
  billing_state?: string;
  billing_country?: string;
  billing_postal_code?: string;
  shipping_address?: string;
  shipping_address_2?: string;
  shipping_city?: string;
  shipping_state?: string;
  shipping_country?: string;
  shipping_postal_code?: string;
  company_address?: string;
  company_address_2?: string;
  company_city?: string;
  company_state?: string;
  company_country?: string;
  company_postal_code?: string;
};

const initialState: AddressStateType = {
  home_address: undefined,
  home_address_2: undefined,
  home_city: undefined,
  home_state: undefined,
  home_country: undefined,
  home_postal_code: undefined,
  billing_address: undefined,
  billing_address_2: undefined,
  billing_city: undefined,
  billing_state: undefined,
  billing_country: undefined,
  billing_postal_code: undefined,
  shipping_address: undefined,
  shipping_address_2: undefined,
  shipping_city: undefined,
  shipping_state: undefined,
  shipping_country: undefined,
  shipping_postal_code: undefined,
  company_address: undefined,
  company_address_2: undefined,
  company_city: undefined,
  company_state: undefined,
  company_country: undefined,
  company_postal_code: undefined,
};

const AddressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    set_address: (state, action) => {
      Object.assign(state, action.payload);
    },
    clear_address: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { set_address, clear_address } = AddressSlice.actions;

export default AddressSlice.reducer;
