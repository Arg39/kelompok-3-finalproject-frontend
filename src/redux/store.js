import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import sewaReducer from "./slices/sewaSlice";
import testReducer from "./slices/testSlice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import promosiSlice from "./slices/promosiSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    sewa: sewaReducer,
    promosi: promosiSlice,
    test: testReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
