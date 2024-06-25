import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiLaravel from "../api/apiLaravel";

export const RegisterAsync = createAsyncThunk(
  "auth/register",
  async (
    { name, email, password, confirmPassword, role },
    { rejectWithValue }
  ) => {
    if (password !== confirmPassword) {
      return rejectWithValue({ message: "Your password is not the same" });
    } else {
      try {
        const response = await apiLaravel.post("/register", {
          name,
          email,
          password,
          role,
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const LoginAsync = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await apiLaravel.post("/login", { email, password });
      dispatch(fetchUserData());
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (_, { getState }) => {
    const token = getState().auth.token || localStorage.getItem("token");
    try {
      const response = await apiLaravel.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return { data: response.data, status: true };
    } catch (error) {
      throw error;
    }
  }
);

export const updateUserData = createAsyncThunk(
  "auth/updateUserData",
  async (
    {
      id,
      name,
      email,
      phone_number,
      gender,
      birthdate,
      address,
      description,
      photo,
    },
    { rejectWithValue, getState }
  ) => {
    const token = getState().auth.token || localStorage.getItem("token");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone_number", phone_number);
    formData.append("gender", gender);
    formData.append("birthdate", birthdate);
    formData.append("address", address);
    formData.append("description", description);
    if (photo) {
      formData.append("photo", photo);
    }

    try {
      const response = await apiLaravel.put(`/updateUser/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: false,
    user: null,
    token: localStorage.getItem("token"),
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.status = false;
      state.token = null;
      localStorage.removeItem("token");
    },
    loadPreviousState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.user = action.payload.data.user;
        state.token = action.payload.data.access_token.token;
        localStorage.setItem("token", action.payload.data.access_token.token);
      })
      .addCase(LoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errors.message;
      })
      .addCase(RegisterAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RegisterAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.user = action.payload.data.user;
        state.token = action.payload.data.access_token.token;
        localStorage.setItem("token", action.payload.data.access_token.token);
      })
      .addCase(RegisterAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errors.message;
      })
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.user = action.payload.data.user;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.user = action.payload;
      })
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errors.message;
      });
  },
});

export const { logout, loadPreviousState } = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
