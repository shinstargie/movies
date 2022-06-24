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
    page?: number;
  };
}

const movieWithGenreOptions: MovieWithGenreOptions = {
  params: {
    language: "en-US",
    include_adult: false,
    with_genres: 28,
    without_genres: 16,
    page: 1,
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

function cleanResults(data: Movies) {
  return data.results.filter(
    (movie: any) =>
      !movie.title.toLocaleLowerCase().includes("porn") &&
      !movie.title.toLocaleLowerCase().includes("female") &&
      !movie.title.toLocaleLowerCase().includes("semen") &&
      !movie.title.toLocaleLowerCase().includes("sex") &&
      !movie.title.toLocaleLowerCase().includes("cannibal") &&
      !movie.title.toLocaleLowerCase().includes("torment") &&
      !movie.title.toLocaleLowerCase().includes("lust") &&
      !movie.title.toLocaleLowerCase().includes("trip 6") &&
      !movie.title.toLocaleLowerCase().includes("fire island") &&
      !movie.title.toLocaleLowerCase().includes("xxx") &&
      !movie.title.toLocaleLowerCase().includes("seducing")
  );
}

function moviesWithPostersOnly(data: Movies) {
  return data.results.filter((poster) => poster.poster_path !== null);
}

let fetchMovies: (path: string, params: { params: object }) => Promise<Movies>;
let fetchMoviesWithGenre: (
  id: number,
  notId: number | string,
  params?: { params: object } | null
) => Promise<Movies>;
let fetchGenres: (path: string) => Promise<Genres>;
let fetchTrailer: (id: number) => Promise<{ key: string }> | undefined;

fetchMovies = async (path, params) => {
  const { data } = await api.get(path, params);
  data.results = cleanResults(data);
  data.results = moviesWithPostersOnly(data);
  return data;
};

fetchMoviesWithGenre = async (id, notId, params = null) => {
  movieWithGenreOptions.params.with_genres = id;
  movieWithGenreOptions.params.without_genres = notId;
  const { data } = await api.get(
    "discover/movie",
    params ? params : movieWithGenreOptions
  );
  data.results = cleanResults(data);
  data.results = moviesWithPostersOnly(data);
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
  cleanResults,
  fetchMovies,
  fetchMoviesWithGenre,
  fetchGenres,
  fetchTrailer,
  api,
  IMAGE_PATH,
  BACKDROP_PATH,
  movieOptions,
  movieWithGenreOptions,
};
