import axios from "axios";

const apiLaravel = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiLaravel;
