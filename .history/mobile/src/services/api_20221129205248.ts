import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.7/3333",
});


api.interceptors.response.use((response) => {
  console.log("INTERCEPTOR RESPONSE =>", response);
  return response;
}, (error) => {
  console.log("INTERCEPTOR RESPONSE ERROR =>", error);
  return Promise.reject(error)
})



export { api };