import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
const baseUrl = process.env.REACT_APP_API_BASE_URL;

export default axios.create({
  baseURL: baseUrl
});