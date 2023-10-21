//storeを生成する
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
//storeを作る
export const store = configureStore({
  reducer: userReducer,
})
//型を決める
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType< typeof store.getState >