import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tags: [],
};
const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setTags(state, action) {
      state.tags = state.tags.concat(action.payload);
    },
  },
});
export const tagsActions = tagsSlice.actions;

export default tagsSlice;
