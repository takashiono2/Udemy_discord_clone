import { createSlice } from '@reduxjs/toolkit';
import { InitialUserState } from '../Types';

const initialUserState: InitialUserState = {
  user: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login: (state, action)=>{
      state.user = action.payload;
    },
    logout: (state)=>{
      state.user = null;
    },
  }
});

export default userSlice.reducer;
