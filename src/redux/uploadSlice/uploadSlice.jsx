// uploadSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Thực hiện API upload file
export const uploadFile = createAsyncThunk('upload/uploadFile', async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await axios.post('api/UploadFile/File', formData, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImxhbmRwYWRtaWthQGdtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNDNiZDhkMzAtODVhZi00OTYwLThhOWYtZDdmN2VlZWI4NTcxIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJleHAiOjE2OTA2MjAxNzIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjcwNTEiLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo3MDUxIn0.cPI3rAFGTj_D6pA_3El9_254MTH88mEbl9iL__m0-V4`,
    },
  });
  return response.data.data;
});

const uploadSlice = createSlice({
  name: 'upload',
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        // Xử lý khi yêu cầu upload file đang pending
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        // Xử lý khi upload file thành công
        console.log('Upload file success:', action.payload);
      })
      .addCase(uploadFile.rejected, (state, action) => {
        // Xử lý khi upload file bị lỗi
        console.error('Upload file error:', action.error);
      });
  },
});

export default uploadSlice.reducer;
