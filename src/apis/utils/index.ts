import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 2000,
  withCredentials: true,
});

export default axiosInstance;
