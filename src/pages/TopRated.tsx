import React, { useEffect, useState } from "react";
import { movieOptions, fetchMovies } from "../api";
import PaginatedMovies from "../components/PaginatedMovies";
import Section from "../components/Section";
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

      <Section top={currentPage !== 1 && true}>
        <PaginatedMovies data={currentMovies} onPageChange={onPageChange} />
      </Section>
    </>
  );
};

export default TopRated;
