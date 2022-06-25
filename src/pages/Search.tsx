import React, { useContext, useState, useEffect } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import { Movie } from "../components/_types";
import { SearchContext } from "../context/SearchContext";
import PaginatedMovies from "./../components/PaginatedMovies";

interface Props {}

const Search: React.FC<Props> = ({}) => {
  const {
    searchInput,
    searchData,
    searchLoading,
    searchPageCount,
    setCurrentSearchPage,
  } = useContext(SearchContext);
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  /* useEffect(() => { */
  /*   setCurrentMovies searchData;*/
  /* }, [currentPage]); */

  function onPageChange(event: { selected: number }) {
    setCurrentMovies(null);
    setCurrentSearchPage(event.selected + 1);
    // setCurrentPage(event.selected + 1);
  }

  return (
    <>
      <Section>
        <Container>
          <PaginatedMovies
            data={searchData}
            onPageChange={onPageChange}
            totalPages={searchPageCount}
          />
        </Container>
      </Section>
    </>
  );
};

export default Search;
