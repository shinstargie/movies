import React, { createContext, useState, useEffect } from "react";
import { fetchGenres } from "../api";
import { GenreContextInterface, Genre } from "./../components/_types";

export const GenreContext = createContext<GenreContextInterface>({
  genres: null,
  genresLoading: true,
  selectedGenre: Math.random(),
  setSelectedGenre: () => {},
});

interface Props {
  children: JSX.Element[] | JSX.Element;
}

// Dispatch<any>;

export const GenreContextProvider: React.FC<Props> = ({ children }) => {
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [genresLoading, setGenresLoading] = useState<boolean>(true);
  const [selectedGenre, setSelectedGenre] = useState<any>();

  useEffect(() => {
    getGenres();
  }, []);

  async function getGenres() {
    const data = await fetchGenres("genre/movie/list");
    setGenres(data.genres);
    setGenresLoading(false);
  }

  return (
    <>
      <GenreContext.Provider
        value={{ genres, genresLoading, selectedGenre, setSelectedGenre }}
      >
        {children}
      </GenreContext.Provider>
    </>
  );
};

// const { genres, genresLoading } = useContext(GenreContext);
