import { configureStore } from "@reduxjs/toolkit";
import reducer from "@/reducers/user";

export default configureStore({
  reducer,
});
