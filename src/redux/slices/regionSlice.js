import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiLaravel from "../api/apiLaravel";

// Async thunk to fetch provinces
export const fetchProvinces = createAsyncThunk("building/fetchProvinces", async () => {
  try {
    const response = await apiLaravel.get("/regions/provinces");
    console.log(response);
    return response.data; 
  } catch (error) {
    throw Error(error.response.data.message);
  }
});

// Async thunk to fetch regencies in a province
export const fetchRegenciesInProvince = createAsyncThunk(
  "building/fetchRegenciesInProvince",
  async (provinceId) => {
    try {
      const response = await apiLaravel.get(`/regions/provinces/${provinceId}`);
      return response.data; 
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

// Async thunk to fetch a single regency
export const fetchRegency = createAsyncThunk(
  "building/fetchRegency",
  async (regencyId) => {
    try {
      const response = await apiLaravel.get(`/regions/regencies/${regencyId}`);
      return response.data; // Assuming the response directly contains the regency data
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

const buildingSlice = createSlice({
  name: "building",
  initialState: {
    isLoading: false,
    provinceData: null,
    regencyData: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Reducer for fetchProvinces
      .addCase(fetchProvinces.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProvinces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.provinceData = action.payload.data || null; // Assuming payload directly contains data array
        state.error = null;
      })
      .addCase(fetchProvinces.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Reducer for fetchRegenciesInProvince
      .addCase(fetchRegenciesInProvince.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRegenciesInProvince.fulfilled, (state, action) => {
        state.isLoading = false;
        state.regencyData = action.payload.data || null; // Assuming payload directly contains data array
        state.error = null;
      })
      .addCase(fetchRegenciesInProvince.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      // Reducer for fetchRegency
      .addCase(fetchRegency.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRegency.fulfilled, (state, action) => {
        state.isLoading = false;
        state.regencyData = action.payload || null; // Assuming payload directly contains regency data
        state.error = null;
      })
      .addCase(fetchRegency.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default buildingSlice.reducer;
