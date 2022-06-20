import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { modalStyles } from "./../components/styles/customStyles";
import Section from "./../components/Section";
import StyledContainer from "./../components/styles/StyledContainer.styled";
import MovieContainer from "../components/styles/MovieContainer.styled";
import MovieImage from "./../components/MovieImage";
import TrailerModal from "../components/TrailerModal";
import api from "./../api";

Modal.setAppElement("#root");

export interface Movie {
  id: number;
  trailerKey: string;
  title: string;
  overview: string;
  vote: number;
  poster_path: string;
  trailer: {
    key: string;
  };
  release_date: string;
  genre_ids: number[];
}

export interface Genres {
  id: number;
  name: string;
}

const Home: React.FC = () => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [data, setData] = useState<Movie[] | null>(null);
  const [genres, setGenres] = useState<Genres[] | null>(null);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [currentGenres, setCurrentGenres] = useState<Genres[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    getData();
    getGenres();
    setLoading(false);
  }, []);

  async function getData() {
    const { data } = await api.get("discover/movie", {
      params: {
        language: "en-US",
        include_adult: false,
        page: 1,
      },
    });

    setData(data.results);
  }

  async function getTrailer(id: number) {
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
  }

  async function getGenres() {
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
  }

  return (
    <>
      <h1>Home page</h1>
      <Section>
        <StyledContainer>
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
            {data?.map((movie) => (
              <MovieImage
                key={movie.id}
                src={IMAGE_PATH + `${movie.poster_path}`}
                alt={movie.title}
                onClick={() => openModal(movie)}
              />
            ))}
          </MovieContainer>
        </StyledContainer>
      </Section>
    </>
  );
};

export default Home;

{
  /* {loading && <TrailerLoading />} */
}
{
  /* <TrailerTitle text={currentMovie.title} />
                <Trailer movie={currentMovie} />
                <TrailerDescription text={currentMovie.overview} /> */
}
