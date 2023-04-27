import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://erafolio.era-coding.com/api/websites/1/";
const Token = "54276c1f9c106900b464bbe131d1af870ba4eff9";

export const fetchData = createAsyncThunk(
  "homeSlice/fetchData",
  async (_,{ rejectWithValue }) => {
    console.log("Fetching Data");
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${Token}`,
        },
      };
      const response = await axios.get(`${API_URL}`, config);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  data: [],
  loading: false,
  error: false,
};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state, action) => {
      state.loading = true;
      state.error = false;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.loading = false;
      console.log(action.payload)
      state.data = action.payload;
      state.error = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.loading = false;
      state.error = {
        status: true,
        data: action.payload,
      };
    },
  },
});

export default homeSlice.reducer;
