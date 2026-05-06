import { createSlice } from "@reduxjs/toolkit";

// ReduxToolkit slice store 생성
export const articleSlice = createSlice({
  name: "article-slice",
  initialState: {
    list: [],
    count: 0,
    pagination: { pageNo: 0, pageCount: 0 },
  },
  reducers: {
    refresh(store, action) {
      store.list = action.payload.result;
      store.pagination = action.payload.pagination;
      store.count = action.payload.count;
    },
  },
});
export const articleAction = articleSlice.actions;
console.log(articleAction);
