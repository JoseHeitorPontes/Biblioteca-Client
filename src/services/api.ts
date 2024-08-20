import axios from "axios";

const token = localStorage.getItem("token");

export const api = axios.create({
    baseURL: import.meta.env.BASE_URL,
    headers: {
        Authorization: token,
    }
});