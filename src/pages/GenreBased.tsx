import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesWithGenre, movieWithGenreOptions } from "../api";
import PageBanner from "../components/PageBanner";
import Section from "../components/Section";
import { Movie } from "../components/_types";
import Container from "./../components/Container";
import PaginatedMovies from "./../components/PaginatedMovies";
import { GenreContext } from "./../context/GenreContext";

interface ParamId {
  id: string;
}

const GenreBased: React.FC = ({}) => {
  const { genres, selectedGenre, setSelectedGenre } = useContext(GenreContext);
  const { id } = useParams<ParamId>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);
  const [remountComponent, setRemountComponent] = useState(0);

  useEffect(() => {
    getMoviesWithGenre();
  }, [currentPage]);

  useEffect(() => {
    // remounting paginated component resets page to 1
    setRemountComponent(Math.random());
    getMoviesWithGenre();
  }, [id]);

  useEffect(() => {
    if (genres) {
      const genre = genres.find((genre) => genre.id === Number(id));
      setSelectedGenre({ label: genre?.name, value: genre?.id });
    }
  }, [id]);

  async function getMoviesWithGenre() {
    movieWithGenreOptions.params.page = currentPage;
    const data = await fetchMoviesWithGenre(
      Number(id),
      "",
      movieWithGenreOptions
    );
    setCurrentMovies(data.results);
  }

  function onPageChange(event: { selected: number }) {
    setCurrentMovies(null);
    setCurrentPage(event.selected + 1);
  }

  return (
    <>
      {selectedGenre && (
        <PageBanner
          title={selectedGenre?.label}
          currentPage={currentPage}
          currentMovies={currentMovies}
        />
      )}

      <Section top={currentPage !== 1}>
        <Container>
          <PaginatedMovies
            data={currentMovies}
            onPageChange={onPageChange}
            resetPage={remountComponent}
          />
        </Container>
      </Section>
    </>
  );
};

export default GenreBased;
