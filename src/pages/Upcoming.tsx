import React, { useEffect, useState } from "react";
import { movieOptions, fetchMovies } from "../api";
import Container from "../components/Container";
import PaginatedMovies from "../components/PaginatedMovies";
import Section from "../components/Section";
import { Movie } from "../components/_types";

interface Props {}

const Upcoming: React.FC<Props> = ({}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  async function getMovies() {
    movieOptions.params.page = currentPage;
    const data = await fetchMovies("movie/upcoming", movieOptions);
    setCurrentMovies(data.results);
  }

  function onPageChange(event: { selected: number }) {
    setCurrentMovies(null);
    setCurrentPage(event.selected + 1);
  }

  return (
    <>
      <Section>
        <Container>
          <PaginatedMovies data={currentMovies} onPageChange={onPageChange} />
        </Container>
      </Section>
    </>
  );
};

export default Upcoming;
