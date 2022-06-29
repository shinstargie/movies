import React, { useContext } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
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

  function onPageChange(event: { selected: number }) {
    setCurrentSearchPage(event.selected + 1);
  }

  return (
    <>
      <Section>
        <Container med={true}>
          <h2>Showing results for "{searchInput}"</h2>
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
