// productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thực hiện API tạo sản phẩm
export const createProduct = createAsyncThunk('products/createProduct', async (productData) => {
  // const {
  //   auth: { token }, // Lấy token từ slice auth
  // } = getState();

  const response = await axios.post('api/products', productData, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImxhbmRwYWRtaWthQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNDNiZDhkMzAtODVhZi00OTYwLThhOWYtZDdmN2VlZWI4NTcxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2OTA2MjAxNzIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTEiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDUxIn0.cPI3rAFGTj_D6pA_3El9_254MTH88mEbl9iL__m0-V4`,
    },
  });

  return response.data;
});

const productSlice = createSlice({
  name: 'product',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        // Xử lý khi yêu cầu tạo sản phẩm đang pending
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        // Xử lý khi tạo sản phẩm thành công
        console.log('Create product success:', action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        // Xử lý khi tạo sản phẩm bị lỗi
        console.error('Create product error:', action.error);
      });
  },
});

export default productSlice.reducer;
