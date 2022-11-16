import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../utils/axiosConfig";

export const auth = createAsyncThunk(
  "auth/auth",
  async (data, { rejectWithValue }) => {
    try {
      const response = await API.post("/google/", data);
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue(e.response.data.message);
    }
  }
);
