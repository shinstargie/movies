import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesWithGenre, movieWithGenreOptions } from "../api";
import Section from "../components/Section";
import StyledBannerSection from "../components/styles/StyledBannerSection";
import { Movie } from "../components/_types";
import Container from "./../components/Container";
import PaginatedMovies from "./../components/PaginatedMovies";
import { GenreContext } from "./../context/GenreContext";

interface ParamId {
  id: string;
}

const GenreBased: React.FC = ({}) => {
  const { genres } = useContext(GenreContext);
  const { id } = useParams<ParamId>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);
  const [remountComponent, setRemountComponent] = useState(0);
  const [currentGenre, setCurrentGenre] = useState<string | undefined>("");
  const [banner, setBanner] = useState<Movie | null>();

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
      setCurrentGenre(genre?.name);
    }
  }, [id]);

  async function getMoviesWithGenre() {
    movieWithGenreOptions.params.page = currentPage;
    const data = await fetchMoviesWithGenre(
      Number(id),
      "",
      movieWithGenreOptions
    );

    const randomMovieForBanner: number = Number(
      (Math.random() * data.results.length).toFixed()
    );

    console.log(data.results[randomMovieForBanner]);
    setBanner(data.results[randomMovieForBanner]);
    setCurrentMovies(data.results);
  }

  function onPageChange(event: { selected: number }) {
    setCurrentMovies(null);
    setCurrentPage(event.selected + 1);
  }

  return (
    <>
      {currentPage === 1 && (
        <StyledBannerSection bgImg={banner?.backdrop_path}>
          <div
            style={{
              maxWidth: "1440px",
              margin: "0 auto",
              height: "100%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h2 style={{ fontSize: "65px" }}>{currentGenre}</h2>
          </div>
        </StyledBannerSection>
      )}

      <Section>
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
