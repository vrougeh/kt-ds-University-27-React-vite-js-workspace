import { createSlice } from "@reduxjs/toolkit";

// ReduxToolkit slice store 생성
export const articleSlice = createSlice({
  name: "article-slice",
  initialState: {
    list: [],
    count: 0,
    pagenation: {},
  },
  reducers: {
    setArticleList: (state, action) => {
      const { count, result, pagenation } = action.payload;
      state.list = result;
      state.count = count;
      state.pagenation = pagenation;
    },
  },
});
export const articleAction = articleSlice.actions;
