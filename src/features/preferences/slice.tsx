import { createSlice } from "@reduxjs/toolkit";

export type PreferencesStateType = {
  discover_events?: boolean;
  friends_buy_ticket?: boolean;
  organizer_announce_event?: boolean;
  events_on_sale?: boolean;
  events_liked?: boolean;
  feature_update?: boolean;
  event_sales_recap?: boolean;
  reminder_for_next_event?: boolean;
  confirmation_from_attendies?: boolean;
};

const initialState: PreferencesStateType = {
  discover_events: undefined,
  friends_buy_ticket: undefined,
  organizer_announce_event: undefined,
  events_on_sale: undefined,
  events_liked: undefined,
  feature_update: undefined,
  event_sales_recap: undefined,
  reminder_for_next_event: undefined,
  confirmation_from_attendies: undefined,
};

const preferenceSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    set_preferences: (state, action) => {
      Object.assign(state, action.payload);
    },
    clear_preferences: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { set_preferences, clear_preferences } = preferenceSlice.actions;

export default preferenceSlice.reducer;
