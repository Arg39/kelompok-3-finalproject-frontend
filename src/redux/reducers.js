import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import sewaSlice from "./slices/sewaSlice";
import testSlice from "./slices/testSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    sewa: sewaSlice,
    test: testSlice,
  },
});
