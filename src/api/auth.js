// React && Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
//import utils
import { API } from "../utils/axiosConfig";

export const auth = createAsyncThunk(
  "auth/auth",
  async (data, { rejectWithValue }) => {
    const tokenData = {
      auth_token: data,
    };
    try {
      const response = await API.post("users/google/", tokenData);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data.message);
    }
  }
);