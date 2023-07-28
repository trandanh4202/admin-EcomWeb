import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: {
    token: null,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { setUserInfo } = authSlice.actions;

export default authSlice.reducer;
