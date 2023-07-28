// store.js
import { configureStore } from '@reduxjs/toolkit';
import colorModeReducer from './colorModel/colorModeSlice';
import uploadReducer from './uploadSlice/uploadSlice';
import productReducer from './productSlice/productSlice';
import authReducer from './authSlice/authSlice';

const store = configureStore({
  reducer: {
    colorMode: colorModeReducer,
    upload: uploadReducer,
    product: productReducer,
    auth: authReducer,

    // Add other reducers here if needed
  },
});

export default store;
