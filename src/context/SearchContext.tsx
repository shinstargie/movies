import React, { createContext, useState, useEffect, Dispatch } from "react";
import { useHistory } from "react-router-dom";
import { fetchSearchResults } from "../api";
import { Movie } from "../components/_types";

interface SearchContextInterface {
  searchInput: string;
  searchLoading: boolean;
  searchData: Movie[] | null;
  searchPageCount: number;
  setCurrentSearchPage: Dispatch<any>;
  handleInputSearch: Dispatch<any>;
}

export const SearchContext = createContext<SearchContextInterface>({
  searchInput: "",
  searchLoading: true,
  searchData: null,
  searchPageCount: 0,
  setCurrentSearchPage: function () {},
  handleInputSearch: function () {},
});

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const SearchContextProvider: React.FC<Props> = ({ children }) => {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchData, setSearchData] = useState<Movie[] | null>(null);
  const [searchPageCount, setSearchPageCount] = useState<number>(0);
  const [currentSearchPage, setCurrentSearchPage] = useState<number>(1);
  const [searchLoading, setSearchLoading] = useState<boolean>(true);

  useEffect(() => {
    getSearchResults();
  }, [searchInput]);

  useEffect(() => {
    getSearchResults();
  }, [currentSearchPage]);

  async function getSearchResults() {
    if (searchInput.length < 1) return;

    history.push("/search");
    setSearchLoading(true);
    const data = await fetchSearchResults(searchInput, currentSearchPage);
    setSearchPageCount(data.total_pages);
    setSearchData(data.results);
    setSearchLoading(false);
  }

  function handleInputSearch(value: string) {
    setSearchInput(value);
  }

  return (
    <>
      <SearchContext.Provider
        value={{
          searchInput,
          searchData,
          searchLoading,
          handleInputSearch,
          searchPageCount,
          setCurrentSearchPage,
        }}
      >
        {children}
      </SearchContext.Provider>
    </>
  );
};

// const { genres, genresLoading } = useContext(GenreContext);
