import { configureStore } from "@reduxjs/toolkit";
import generalSlice from "./reducers/generalSlice";
import trelloSlice from "./reducers/trelloSlice";

export const store = configureStore({
  reducer: {
    general: generalSlice,
    trello: trelloSlice,
  },
});
