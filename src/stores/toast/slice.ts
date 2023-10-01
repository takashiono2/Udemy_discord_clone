import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ToastContent } from '../../models/Toast'
//型情報をもとにエンティティ操作用のAdapterを生成し、CRUD機能を提供
export const toastAdapter = createEntityAdapter<ToastContent>({
  // 作成日時について降順とする
  sortComparer: (a, b) => b.createdAtTimestamp - a.createdAtTimestamp,
})

export const toastSlice = createSlice({
  name: 'toast', //sliceの名称
  //AdapterのgetInitialStateでstateの初期状態を得る
  initialState: toastAdapter.getInitialState(), //stateの初期状態
  //reducerはstateとactionを受け取り、新しいstateを返す。第1引数が現在のstate
  reducers: {  //ここに定義したキーがActionCreator関数の名前になる。
    addToast: (state, action: PayloadAction<ToastContent>) => {
      toastAdapter.addOne(state, action.payload)
    },
    removeToast: (state, action: PayloadAction<string>) => {
      toastAdapter.removeOne(state, action.payload)
    },
  },
})

export const { addToast, removeToast } = toastSlice.actions