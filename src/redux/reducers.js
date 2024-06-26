import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import sewaSlice from "./slices/sewaSlice";
import testSlice from "./slices/testSlice";
import promosiSlice from "./slices/promosiSlice";
import buildingSlice from "./slices/buildingSlice";
import regionSlice from "./slices/regionSlice";

export default configureStore({
  reducer: {
    auth: authSlice,
    sewa: sewaSlice,
    promosi: promosiSlice,
    building: buildingSlice,
    region: regionSlice,
  },
});
