import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import MovieImage from "./../components/MovieImage";
import MovieContainer from "./../components/styles/MovieContainer.styled";
import { modalStyles } from "../components/styles/customStyles";
import Container from "../components/Container";
import Section from "./../components/Section";
import TrailerModal from "../components/TrailerModal";
import Modal from "react-modal";
import toast from "react-hot-toast";
import { Genre, Movie } from "../components/_types";
import StyledMovieCardLoader from "./../components/styles/StyledMovieCardLoader.styled";
import {
  fetchMovies,
  fetchGenres,
  IMAGE_PATH,
  movieOptions,
  fetchTrailer,
} from "./../api";

interface Props {}

const Paginate: React.FC<Props> = ({}) => {
  const loadingItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  // hard page limit with /discover route implemented by API
  const discoverRoutePageCountLimit = 500;
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [currentGenres, setCurrentGenres] = useState<Genre[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getMovies();
  }, [currentPage]);

  useEffect(() => {
    getGenres();
  }, []);

  async function getMovies() {
    movieOptions.params.page = currentPage;
    const data = await fetchMovies("discover/movie", movieOptions);
    setCurrentMovies(data.results);
  }

  async function getGenres() {
    const data = await fetchGenres("genre/movie/list");
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
    const trailer = await fetchTrailer(movie.id);
    if (!trailer) return toast.error("Trailer unavailable");

    movie.trailerKey = trailer.key;
    matchGenres(movie);
    setCurrentMovie(movie);
    setToggleModal(!toggleModal);

    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 1200);
  }

  // Invoke when user click to request another page
  const handlePageClick = (event: { selected: number }) => {
    setCurrentMovies(null);
    setCurrentPage(event.selected + 1);
  };

  return (
    <>
      <Section>
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

        <Container>
          <MovieContainer>
            {!currentMovies &&
              loadingItems.map((item, idx) => (
                <StyledMovieCardLoader key={idx} />
              ))}

            {currentMovies?.map((movie: any) => (
              <MovieImage
                key={movie.id}
                src={IMAGE_PATH + `${movie.poster_path}`}
                alt={movie.title}
                onClick={() => openModal(movie)}
              />
            ))}
          </MovieContainer>

          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={discoverRoutePageCountLimit}
            previousLabel="< previous"
            renderOnZeroPageCount={() => null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
          />
        </Container>
      </Section>
    </>
  );
};

export default Paginate;

/* const timeout: ReturnType<typeof setTimeout> = setTimeout(async () => {
      
    }, 500); */

/*

const options = {
      params: {
        language: "en-US",
        include_adult: false,
        page: currentPage,
      },
    };

const [movies, setMovies] = useState<Movie[] | null>(null);

getData();

async function getData() {
    const { data } = await api.get("discover/movie", {
      params: {
        language: "en-US",
        include_adult: false,
        page: currentPage,
      },
    });

    setCurrentMovies(data.results);
  }


    const { data } = await api.get(`genre/movie/list`, {
      params: {
        language: "en-US",
      },
    });
    setGenres(data.genres);

    const trailer = await getTrailer(movie.id);

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

    // const trailer = await fetchTrailer(id);
    // console.log(trailer);
    // return trailer;
  }

  activeLinkClassName="active"

*/
