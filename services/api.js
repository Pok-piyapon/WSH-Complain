import axios from 'axios';
import { GetData, SaveData } from './storage';

// Initialize Axios instance
const api = axios.create({
  baseURL: 'https://piyapon.sinothaitrade.com',
  headers:{
    "Content-Type":"application/json"
  }
});

// Request Interceptor
api.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage or your preferred storage
    const token = GetData("accessToken");

    if (token) {
      const auth = typeof(token) == "object" ? `Bearer NOTSET` : `Bearer ${token}`
      // Attach the token to the Authorization header
      config.headers.Authorization = auth;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response Interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    // Check if the error status is 401 (Unauthorized)
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Refresh the token
        const newToken = await getNewToken();
        await SaveData('accessToken', newToken);
        const attachment = `Bearer ${newToken}`
        // console.log(attachment)
        // const token = await GetData("accessToken")
        // Update the Authorization header with the new token
        originalRequest.headers.Authorization = attachment;
        return axios(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

async function getNewToken() {
  const response = await axios.post(`${api.defaults.baseURL}/refreshToken`, {
    refreshToken: await GetData('refreshToken'),
  });
  return String(response.data.accessToken);
}

export default api;
