import axios, { AxiosRequestConfig, AxiosResponse, Method } from 'axios';
const baseUrl = 'http://localhost:8080'

export default axios.create({
  baseURL: baseUrl
});