import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice.js";
import { Provider } from "react-redux";

const toolkitStore = configureStore({
  // toolkit store에 slice store 등록
  reducer: {
    // todo 이름의 state를 만든다.
    todo: todoSlice.reducer,
    // article 이름의 state를 만든디
    // article: articleSlice.reducer,
    // user: userSlice.reducer,
  },
});

export const ToolkitProvider = ({ children }) => {
  return <Provider store={toolkitStore}>{children}</Provider>;
};
