import axios from "axios";

const url = "http://192.168.1.7/3333";

export const api = axios.create({
  baseURL: url,
});
