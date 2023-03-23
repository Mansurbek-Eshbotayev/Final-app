import axios from "axios";
const API_BASE_URL = "http://localhost:1212/admin";

const token = localStorage.getItem("token");

export const axiosServices = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: token,
  },
});


