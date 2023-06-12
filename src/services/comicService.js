import axios from "axios";
import nProgress from "nprogress";
import config from "../config/config";

const apiClient = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  nProgress.start();
  return config;
});

apiClient.interceptors.response.use((response) => {
  nProgress.done();
  return response;
});

const { apiKey, hash, ts } = config;
const queryParams = `?ts=${ts}&apikey=${apiKey}&hash=${hash}`;

export default {
  getAllComic() {
    try {
      return apiClient.get("comics" + queryParams);
    } catch (error) {
      return error;
    }
  },

  getComicById(id) {
    try {
      return apiClient.get("comics/" + id + queryParams);
    } catch (error) {
      return error;
    }
  },
};
