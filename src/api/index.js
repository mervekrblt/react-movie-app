import axios from "axios";
import request from "./requests";
const BASE_AXIOS = axios.create({ baseURL: "https://api.themoviedb.org/3/" });
const BASE_KEY = process.env.REACT_APP_API_KEY;

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

export const searchMovie = (q) => {
  try {
    const data = BASE_AXIOS.get(`search/movie?api_key=${BASE_KEY}&query=${q}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovieDetail = (movieId) => {
  try {
    const data = BASE_AXIOS.get(`movie/${movieId}?api_key=${BASE_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPeople = (movieId) => {
  try {
    const data = BASE_AXIOS.get(`movie/${movieId}/credits?api_key=${BASE_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getReview = (movieId) => {
  try {
    const data = BASE_AXIOS.get(`movie/${movieId}/reviews?api_key=${BASE_KEY}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getRecommendations = (movieId) => {
  try {
    const data = BASE_AXIOS.get(
      `movie/${movieId}/recommendations?api_key=${BASE_KEY}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getFilter = (pathname, genrepath) => {
  //const genres = genreList.map(genre => `&with_genres=${genre}`).join("")
  //console.log(genres)
  try {
    const data = BASE_AXIOS.get(
      `movie/${pathname}?api_key=${BASE_KEY}${genrepath}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
