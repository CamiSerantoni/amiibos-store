import axios from "axios";

export const getAmiiboApi = axios.create({
  baseURL: "https://amiiboapi.org/api",
  timeout: 15000,
});
