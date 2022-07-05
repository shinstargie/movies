import React, { useEffect, useState } from "react";
import { movieOptions, fetchMovies } from "../api";
import Container from "../components/Container";
import PageBanner from "../components/PageBanner";
import PaginatedMovies from "../components/PaginatedMovies";
import Section from "../components/Section";
import { Movie } from "../components/_types";

interface Props {}

const Upcoming: React.FC<Props> = ({}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);
  const [totalPages, setTotalpages] = useState<number>();

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  async function getMovies() {
    movieOptions.params.page = currentPage;
    const data = await fetchMovies("movie/upcoming", movieOptions);
    setCurrentMovies(data.results);
    setTotalpages(data.total_pages);
  }

  function onPageChange(event: { selected: number }) {
    setCurrentMovies(null);
    setCurrentPage(event.selected + 1);
  }

  return (
    <>
      <PageBanner
        title="Upcoming"
        currentPage={currentPage}
        currentMovies={currentMovies}
      />

      <Section top={currentPage !== 1}>
        <Container>
          <PaginatedMovies
            data={currentMovies}
            onPageChange={onPageChange}
            totalPages={totalPages}
          />
        </Container>
      </Section>
    </>
  );
};

export default Upcoming;
