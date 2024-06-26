import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiLaravel from "../api/apiLaravel";

export const fetchPromosi = createAsyncThunk("fetchPromosi", async () => {
  const response = await apiLaravel.get("/promotion");
  return response.data;
});

export const addPromosi = createAsyncThunk(
  "addPromosi",
  async (formData, thunkAPI) => {
    const token = localStorage.getItem("token");

    try {
      const response = await apiLaravel.post("/promotion/store", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

export const editPromosi = createAsyncThunk(
  "editPromosi",
  async ({ id, formData }, thunkAPI) => {
    const token = localStorage.getItem("token");

    try {
      const response = await apiLaravel.put(
        `/promotion/${id}/update`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data; // Return the updated data
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const deletePromosi = createAsyncThunk(
  "deletePromosi",
  async (id, thunkAPI) => {
    const token = localStorage.getItem("token");

    try {
      await apiLaravel.delete(`/promotion/${id}/delete`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return id; // Return the id of the deleted item
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const promosiSlice = createSlice({
  name: "promosi",
  initialState: {
    isLoading: false,
    promosiData: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPromosi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPromosi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.promosiData = action.payload.data;
      })
      .addCase(fetchPromosi.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(addPromosi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addPromosi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.promosiData.push(action.payload.data);
      })
      .addCase(addPromosi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(editPromosi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editPromosi.fulfilled, (state, action) => {
        state.isLoading = false;
        // Find and update the edited item in promosiData
        const index = state.promosiData.findIndex(
          (item) => item.id === action.payload.data.id
        );
        if (index !== -1) {
          state.promosiData[index] = action.payload.data;
        }
      })
      .addCase(editPromosi.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deletePromosi.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePromosi.fulfilled, (state, action) => {
        state.isLoading = false;
        // Remove the deleted item from promosiData
        state.promosiData = state.promosiData.filter(
          (item) => item.id !== action.payload
        );
      })
      .addCase(deletePromosi.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export default promosiSlice.reducer;
