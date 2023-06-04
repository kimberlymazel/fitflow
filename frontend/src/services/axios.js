import axios from "axios";

// const baseURL = "http://ec2-54-255-139-151.ap-southeast-1.compute.amazonaws.com:8000/api/v1/";
// const baseURL = "https://d896-103-171-153-101.ngrok-free.app/api/v1/";
const baseURL = "https://ec2-54-255-139-151.ap-southeast-1.compute.amazonaws.com/api/v1/";

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