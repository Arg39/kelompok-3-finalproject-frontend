import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiLaravel from "../api/apiLaravel";

export const fetchBuildings = createAsyncThunk("fetchBuildings", async () => {
  try {
    const response = await apiLaravel.get("/buildings");
    return response.data;
  } catch (error) {
    throw Error(error.response.data.message);
  }
});

export const fetchBuildingUser = createAsyncThunk(
  "fetchBuildingUser",
  async (userId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await apiLaravel.get(`/building/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

export const storeBuilding = createAsyncThunk(
  "storeBuilding",
  async (formData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await apiLaravel.post(`/building/store/${formData.user_id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw Error(error.response.data.message);
    }
  }
);

const buildingSlice = createSlice({
  name: "building",
  initialState: {
    isLoading: false,
    buildingData: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBuildings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBuildings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.buildingData = action.payload.data || null;
        state.error = null;
      })
      .addCase(fetchBuildings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchBuildingUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBuildingUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.buildingData = action.payload.data || null;
        state.error = null;
      })
      .addCase(fetchBuildingUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(storeBuilding.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(storeBuilding.fulfilled, (state, action) => {
        state.isLoading = false;
        state.buildingData = action.payload.data || null; // Update state with the new data if needed
        state.error = null;
      })
      .addCase(storeBuilding.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default buildingSlice.reducer;
