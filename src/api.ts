import axios from "axios";
import { Genres, Movies } from "./components/_types";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";

const movieOptions = {
  params: {
    language: "en-US",
    include_adult: false,
    page: 1,
  },
};

interface MovieWithGenreOptions {
  params: {
    language: string;
    include_adult: boolean;
    with_genres: number | string;
    without_genres: number | string;
  };
}

const movieWithGenreOptions: MovieWithGenreOptions = {
  params: {
    language: "en-US",
    include_adult: false,
    with_genres: 28,
    without_genres: 16,
  },
};

const genreOptions = {
  params: {
    language: "en-US",
  },
};

const trailerOptions = {
  params: {
    language: "en-US",
    append_to_response: "videos",
  },
};

let fetchMovies: (path: string, params: { params: object }) => Promise<Movies>;
let fetchMoviesWithGenre: (
  id: number,
  notId: number | string
) => Promise<Movies>;
let fetchGenres: (path: string) => Promise<Genres>;
let fetchTrailer: (id: number) => Promise<{ key: string }> | undefined;

fetchMovies = async (path, params) => {
  const { data } = await api.get(path, params);
  return data;
};

fetchMoviesWithGenre = async (id, notId) => {
  movieWithGenreOptions.params.with_genres = id;
  movieWithGenreOptions.params.without_genres = notId;
  const { data } = await api.get("discover/movie", movieWithGenreOptions);
  return data;
};

fetchGenres = async (path) => {
  const { data } = await api.get(path, genreOptions);
  return data;
};

fetchTrailer = async (id) => {
  const { data } = await api.get(`movie/${id}`, trailerOptions);
  const trailer = data.videos.results.find(
    (vid: { type: string }) => vid.type === "Trailer"
  );
  return trailer;
};

export {
  fetchMovies,
  fetchMoviesWithGenre,
  fetchGenres,
  fetchTrailer,
  api,
  IMAGE_PATH,
  BACKDROP_PATH,
  movieOptions,
};
