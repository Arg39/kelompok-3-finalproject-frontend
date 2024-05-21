import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiLaravel from "../api/apiLaravel";

export const fetchTest = createAsyncThunk("fetchTest", async () => {
  const response = await apiLaravel.get("/test");
  return response.data;
});

export const postTest = createAsyncThunk("postTest", async(newData) =>{
  const response = await apiLaravel.post('/posttest', newData);
  return response.data;
});

const testSlice = createSlice({
  name: "test",
  initialState: {
    isLoading: false,
    data1: [],
    data2: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data1 = action.payload.data1;
        state.data2 = action.payload.data2;
      })
      .addCase(fetchTest.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(postTest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postTest.fulfilled, (state, action) => {
        state.isLoading = false;
        // Assuming the API returns the updated data set
        state.data1 = action.payload.data1;
        state.data2 = action.payload.data2;
      })
      .addCase(postTest.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default testSlice.reducer;
