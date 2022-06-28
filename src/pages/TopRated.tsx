import React, { useEffect, useState } from "react";
import { movieOptions, fetchMovies } from "../api";
import Container from "../components/Container";
import PaginatedMovies from "../components/PaginatedMovies";
import Section from "../components/Section";
import StyledBannerContainer from "../components/styles/StyledBannerContainer.styled";
import StyledBannerSection from "../components/styles/StyledBannerSection";
import StyledPageTitle from "../components/styles/StyledPageTitle.styled";
import { Movie } from "../components/_types";
import PageBanner from "./../components/PageBanner";

interface Props {}

const TopRated: React.FC<Props> = ({}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  async function getMovies() {
    movieOptions.params.page = currentPage;
    const data = await fetchMovies("movie/top_rated", movieOptions);
    setCurrentMovies(data.results);
  }

  function onPageChange(event: { selected: number }) {
    setCurrentMovies(null);
    setCurrentPage(event.selected + 1);
  }

  return (
    <>
      <PageBanner
        title="Top Rated"
        currentPage={currentPage}
        currentMovies={currentMovies}
      />

      <Section>
        <Container>
          <PaginatedMovies data={currentMovies} onPageChange={onPageChange} />
        </Container>
      </Section>
    </>
  );
};

export default TopRated;
