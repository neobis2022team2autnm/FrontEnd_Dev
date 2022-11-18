import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./reducers/generalSlice";
import dashBordSlice from "./reducers/dashBordSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    dashbord: dashBordSlice,
  },
});
