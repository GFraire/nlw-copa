import axios from "axios";

export const instance = axios.create({
  baseURL: "http://0.0.0.0:3333",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
