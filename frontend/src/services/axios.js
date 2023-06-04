import axios from "axios";

const baseURL = "https://d896-103-171-153-101.ngrok-free.app/api/v1/";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;