import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Section from "../components/Section";
import Container from "../components/Container";
import { Movie } from "../components/_types";
import { fetchMovies, movieOptions } from "../api";
import PaginatedMovies from "../components/PaginatedMovies";
import PageBanner from "../components/PageBanner";

Modal.setAppElement("#root");

const Trending: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);
  const [totalPages, setTotalpages] = useState<number>();

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  async function getMovies() {
    movieOptions.params.page = currentPage;
    const data = await fetchMovies("trending/movie/day", movieOptions);
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
        title="Trending"
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

export default Trending;
