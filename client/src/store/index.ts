import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./slicers/filtersSlice";
import tagsSlice from "./slicers/tagsSlice";

const store = configureStore({
  reducer: { filters: filtersSlice.reducer, tags: tagsSlice.reducer },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
