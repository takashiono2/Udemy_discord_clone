import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../stores/store'
import { addToast, removeToast } from '../stores/toast/slice'
import { buildToastContent, ToastContentLevel } from '../models/Toast'

/**
 * Toastを登録、削除する関数を提供する
 */
export const useToast = () => {
  const dispatch = useDispatch<AppDispatch>()
//useDispatchは更新する時に使う。dispatch関数は、reducerにactionオブジェクトを送信する関数
//dispatchにはactionオブジェクトに引数をとる
  const add = useCallback(
    (level: ToastContentLevel, content: string) => {
      dispatch(addToast(buildToastContent(level, content)))
    },
    [dispatch]
  )

  const remove = useCallback(
    (id: string) => {
      dispatch(removeToast(id))
    },
    [dispatch]
  )

  return {
    addToast: add,
    removeToast: remove,
  }
}