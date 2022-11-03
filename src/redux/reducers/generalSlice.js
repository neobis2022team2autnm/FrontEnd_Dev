import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogged: false,
  user: null,
  status: "Active",
  error: null,
};

export const counterSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setLogout: (state) => {
      state.isLogged = false;
      state.user = null;
      localStorage.removeItem("jwt-token");
    },
    setLoginByGoogle: (state, action) => {
      state.isLogged = true;
      state.user = action.payload.user;
      localStorage.setItem("jwt-token", action.payload.token);
    },
  },
});

export const { setLogout, setLoginByGoogle } = counterSlice.actions;
export default counterSlice.reducer;
