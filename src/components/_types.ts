export interface Movie {
  id: number;
  trailerKey: string;
  title: string;
  overview: string;
  vote: number;
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

export interface GenreContextInterface {
  genres: Genre[] | null;
  genresLoading: boolean;
}
