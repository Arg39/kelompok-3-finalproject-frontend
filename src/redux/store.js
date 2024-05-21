import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sewaReducer from "./slices/sewaSlice";
import testReducer from "./slices/testSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    sewa: sewaReducer,
    test: testReducer,
  },
});

export default store;
