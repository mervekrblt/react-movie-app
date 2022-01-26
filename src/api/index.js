import axios from "axios";
import request from "./requests";
const BASE_AXIOS = axios.create({ baseURL: "https://api.themoviedb.org/3/" });
const BASE_KEY = process.env.REACT_APP_API_KEY

export const fetchTrends = (select) => {
  try {
    const data = BASE_AXIOS.get(`trending/all/${select}?api_key=${BASE_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDiscover = () => {
  try {
    const data = BASE_AXIOS.get(request.fetchDiscover);
    return data;
  } catch (error) {
    console.log(error);
  }
};
