import { Dispatch } from "react";
import { SingleValue } from "react-select";

export interface Movie {
  id: number;
  trailerKey: string;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
  trailer: {
    key: string;
  };
  release_date: string;
  genre_ids: number[];
  backdrop_path: string;
}

export interface Movies {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Genre {
  id: number;
  name: string;
}
export interface Genres {
  genres: Genre[];
}

interface GenreSelectOption {
  value: string;
  label: string;
}

export interface GenreContextInterface {
  genres: Genre[] | null;
  genresLoading: boolean;
  selectedGenre: SingleValue<GenreSelectOption> | null;
  setSelectedGenre: Dispatch<any>;
}
