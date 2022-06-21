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
}

export interface Genre {
  id: number;
  name: string;
}
