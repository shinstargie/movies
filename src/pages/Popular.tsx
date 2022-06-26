import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Section from "../components/Section";
import Container from "../components/Container";
import { Movie } from "../components/_types";
import { fetchMovies, movieOptions } from "../api";
import PaginatedMovies from "../components/PaginatedMovies";

Modal.setAppElement("#root");

const Popular: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  async function getMovies() {
    movieOptions.params.page = currentPage;
    const data = await fetchMovies("discover/movie", movieOptions);
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

export default Popular;

/* const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [currentGenres, setCurrentGenres] = useState<Genre[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true); */

/*  async function getTrailer(id: number) {
    const { data } = await api.get(`movie/${id}`, {
      params: {
        language: "en-US",
        append_to_response: "videos",
      },
    });

    const trailer = data.videos.results.find(
      (vid: { type: string }) => vid.type === "Trailer"
    );

    return trailer;
  } */

/* useEffect(() => {
    const data = fetchMovies("discover/movie", settings);
    console.log(data);
  }, []); */

// setLoading(true);
// getGenres();
// setLoading(false);

{
  /* <Section>
        <Container>
          <h1>Popular</h1>
          <Modal
            style={modalStyles}
            isOpen={toggleModal}
            onRequestClose={() => setToggleModal(!toggleModal)}
          >
            {currentMovie && (
              <TrailerModal
                movie={currentMovie}
                loading={loading}
                trailerGenres={currentGenres}
              />
            )}
          </Modal>

          <MovieContainer>
            {movies?.map((movie) => (
              <MovieImage
                key={movie.id}
                src={IMAGE_PATH + `${movie.poster_path}`}
                alt={movie.title}
                onClick={() => openModal(movie)}
              />
            ))}
          </MovieContainer>
        </Container>
      </Section> */
}

/*   async function getMovies() {
    const options = {
      params: {
        language: "en-US",
        include_adult: false,
        page: 1,
      },
    };

    const data = await fetchMovies("discover/movie", options);
    setMovies(data.results);
  } */

{
  /* {loading && <TrailerLoading />} */
}
{
  /* <TrailerTitle text={currentMovie.title} />
                <Trailer movie={currentMovie} />
                <TrailerDescription text={currentMovie.overview} /> */
}

/* const { data } = await api.get("discover/movie", {
      params: {
        language: "en-US",
        include_adult: false,
        page: 1,
      },
    }); */

/* async function getGenres() {
    const { data } = await api.get(`genre/movie/list`, {
      params: {
        language: "en-US",
      },
    });
    setGenres(data.genres);
  }

  function matchGenres(movie: Movie) {
    if (genres) {
      const matchedGenres = genres.filter(
        (obj) => movie.genre_ids.indexOf(obj.id) !== -1
      );
      setCurrentGenres(matchedGenres);
    }
  }

  async function openModal(movie: Movie) {
    setLoading(true);
    const trailer = await getTrailer(movie.id);
    movie.trailerKey = trailer.key;

    matchGenres(movie);
    setCurrentMovie(movie);
    setToggleModal(!toggleModal);

    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 1200);
  } */
