import { API_URL } from '@/types/common';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use((response) => {
  return response;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 403 && !originalRequest._retry) {
    originalRequest._retry = true;
    
    try {
      // Gửi yêu cầu lấy accessToken mới sử dụng refreshToken
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post(`${API_URL}/api/v1/auth/refresh-token`, {
        refreshToken
      });

      if (response.status === 200) {
        // Lưu mới accessToken và refreshToken (nếu có)
        localStorage.setItem('accessToken', response.data.token.accessToken);
        if (response.data.refreshToken) {
          localStorage.setItem('refreshToken', response.data.token.refreshToken);
        }

        // Cập nhật accessToken vào header của original request
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token.accessToken}`;
        originalRequest.headers['Authorization'] = `Bearer ${response.data.token.accessToken}`;

        // Gửi lại original request với accessToken mới
        return axiosInstance(originalRequest);
      }
    } catch (error) {
      console.error('Không thể refresh token', error);
      return Promise.reject(error);
    }
  }

  return Promise.reject(error);
});

export default axiosInstance;