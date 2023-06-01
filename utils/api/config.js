import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "bearer " + process.env.NEXT_PUBLIC_API_TOKEN,
  },
});
