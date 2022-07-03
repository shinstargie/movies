import React, { useContext } from "react";
import Container from "../components/Container";
import Section from "../components/Section";
import { SearchContext } from "../context/SearchContext";
import PaginatedMovies from "./../components/PaginatedMovies";
import StyledH2Title from "./../components/styles/StyledH2.styled";

interface Props {}

const Search: React.FC<Props> = ({}) => {
  const { searchInput, searchData, searchPageCount, setCurrentSearchPage } =
    useContext(SearchContext);

  function onPageChange(event: { selected: number }) {
    setCurrentSearchPage(event.selected + 1);
  }

  return (
    <>
      <Section top={true}>
        <Container med={true}>
          <StyledH2Title extraMargin="40px">
            Showing results for "{searchInput}"
          </StyledH2Title>

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
