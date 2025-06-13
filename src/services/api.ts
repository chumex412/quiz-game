import axios from "axios";

export const API = axios.create({
  baseURL: "https://opentdb.com/api.php",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
});
