import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiLaravel from "../api/apiLaravel";

export const RegisterAsync = createAsyncThunk(
  "auth/register",
  async (
    { name, email, password, confirmPassword, role },
    { rejectWithValue }
  ) => {
    console.log("Registration request started...");
    console.log({ name, email, password, confirmPassword, role });

    if (password !== confirmPassword) {
      console.log("Password mismatch error...");
      return rejectWithValue({ message: "Your password is not the same" });
    } else {
      try {
        const response = await apiLaravel.post("/register", {
          name,
          email,
          password,
          role,
        });
        console.log("Registration successful...");
        console.log(response.data);
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
      console.log("Failed to fetch user data:", error);
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: false,
    users: null,
    token: localStorage.getItem("token"), // Load token from localStorage
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.status = false;
      state.user = [];
      state.token = null;
      localStorage.removeItem("token");
    },
    loadPreviousState: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      // login
      .addCase(LoginAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.users = action.payload.data.user;
        state.token = action.payload.data.access_token.token;
        console.log(state.users);
        console.log(state.status);
        localStorage.setItem("token", action.payload.data.access_token.token);
      })
      .addCase(LoginAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errors.message;
      })

      // register
      .addCase(RegisterAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(RegisterAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.users = action.payload.data.user;
        state.token = action.payload.data.access_token.token;
        localStorage.setItem("token", action.payload.data.access_token.token);
      })
      .addCase(RegisterAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.errors.message;
      })

      // fetch user data
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.status = true;
        state.users = action.payload.data.user;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout, loadPreviousState } = authSlice.actions;

export default authSlice.reducer;
