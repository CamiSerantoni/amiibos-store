import axios from "axios";

export const amiiboApi = axios.create({
  baseURL: "https://www.amiiboapi.com/api/",
});
