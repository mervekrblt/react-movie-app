import axios from "axios";
import request from "./requests";
const BASE_AXIOS = axios.create({ baseURL: "https://api.themoviedb.org/3" });
console.log(process.env.REACT_APP_API_URL, request.fetchTrendMovies)
export const fetchTrends = () => {
  try {
    const data = BASE_AXIOS.get(request.fetchTrendMovies);
    return data;
  } catch (error) {
    console.log(error);
  }
};
