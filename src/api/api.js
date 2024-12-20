import axios from "axios";

const API_READ_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI3OWNkMTdiZDYxNmM1ZGVkNTU3ZmJlZjBkOGU1ZSIsIm5iZiI6MTczNDUzNDc0NS45MTI5OTk5LCJzdWIiOiI2NzYyZTY1OTFjMzQ2ZWQxYmRmZmY2MjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.3az-4UEJZX2H729sakFYJBq3Q9THmo0UDaPPgFLg0e8";

const pathToImg = "https://image.tmdb.org/t/p/w500/";
const pathToDefaultImg = 'https://www.shutterstock.com/image-photo/vertical-collage-minded-girl-cute-600nw-2293880133.jpg';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

instance.defaults.headers.common[
  "Authorization"
] = `Bearer ${API_READ_ACCESS_TOKEN}`;
instance.defaults.headers.common["accept"] = "application/json";

const options = {
  params: {
    language: "en-EN",
    include_adult: false,
  },
};

export const getTrendingMovies = async () => {
  return await instance.get("trending/movie/day", options);
};

export const getMovieDetails = async (id) => {
  return await instance.get("movie/" + id, options);
};

export const getMovieCast = async (id) => {
  return await instance.get("movie/" + id + "/credits", options);
};

export const getMovieReviews = async (id) => {
  return await instance.get("movie/" + id + "/reviews", options);
};

export const searchMovies = async (query) => {
  options.params.query = query;
  return await instance.get("search/movie", options);
};

export const getMoviePosterPath = (img) => img ? pathToImg + img : pathToDefaultImg;