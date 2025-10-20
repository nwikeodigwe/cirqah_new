import { persistor, type AppDispatch } from "@/store";
import { clear_auth } from "@/features/auth/slice";
import { clear_user } from "@/features/user/slice";

export const clearAllPersistedState = () => {
  persistor.purge();
};

export const clearAllState = (dispatch: AppDispatch) => {
  dispatch(clear_auth());
  dispatch(clear_user());
};

export const resetAllState = (dispatch: AppDispatch) => {
  clearAllState(dispatch);
  clearAllPersistedState();
};
