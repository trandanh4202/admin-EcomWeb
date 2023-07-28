import { createSlice } from '@reduxjs/toolkit';

const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState: 'dark',
  reducers: {
    toggleColorMode: (state) => (state === 'light' ? 'dark' : 'light'),
  },
});

export const { toggleColorMode } = colorModeSlice.actions;

export default colorModeSlice.reducer;
