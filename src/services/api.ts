import axios from "axios";

const accessToken = localStorage.getItem("access_token");

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: accessToken,
  },
});
