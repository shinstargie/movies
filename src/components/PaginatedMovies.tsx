import React, { useEffect, useState, useContext } from "react";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { fetchGenres, fetchTrailer, IMAGE_PATH } from "../api";
import MovieImage from "./MovieImage";
import { modalStyles } from "./styles/customStyles";
import MovieContainer from "./styles/MovieContainer.styled";
import StyledMovieCardLoader from "./styles/StyledMovieCardLoader.styled";
import TrailerModal from "./TrailerModal";
import { Genre, Movie } from "./_types";
import Modal from "react-modal";
import { GenreContext } from "./../context/GenreContext";
import CustomModal from "./CustomModal";

interface Props {
  data: Movie[] | null;
  onPageChange: (event: { selected: number }) => void;
}

interface Params {
  id: string;
}

const PaginatedMovies: React.FC<Props> = ({ data, onPageChange }) => {
  const loadingItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  // hard page limit with /discover route implemented by API
  const pageLimitSetByApi = 500;
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  // const [genres, setGenres] = useState<Genre[] | null>(null);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [currentGenres, setCurrentGenres] = useState<Genre[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { genres } = useContext(GenreContext);

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

  return (
    <>
      <CustomModal
        loading={loading}
        toggleModal={toggleModal}
        closeModal={() => setToggleModal(!toggleModal)}
        movie={currentMovie}
        matchedGenres={currentGenres}
      />

      <MovieContainer>
        {!data &&
          loadingItems.map((item, idx) => <StyledMovieCardLoader key={idx} />)}

        {data?.map((movie: any) => (
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
        onPageChange={onPageChange}
        pageRangeDisplayed={5}
        /* pageCount={discoverRoutePageCountLimit} */
        pageCount={pageLimitSetByApi}
        previousLabel="< previous"
        renderOnZeroPageCount={() => null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
      />
    </>
  );
};

export default PaginatedMovies;

{
  /* 
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
      </Modal> */
}

/* useEffect(() => {
    getGenres();
  }, []); */

/* async function getGenres() {
    const data = await fetchGenres("genre/movie/list");
    setGenres(data.genres);
  } */

// const data = await fetchGenres("genre/movie/list");

// Invoke when user click to request another page
/* const handlePageClick = (event: { selected: number }) => {
    setCurrentMovies(null);
    setCurrentPage(event.selected + 1);
  }; */

/* onPageChange={handlePageClick} */

/*  useEffect(() => {
    if (id) {
      getMoviesWithGenre();
      return;
    }
    getMovies();
  }, [currentPage]);

  useEffect(() => {
    getGenres();
  }, []); */

/* async function getMovies() {
    movieOptions.params.page = currentPage;
    //const data = await fetchMovies("discover/movie", movieOptions);
    const data = await fetchMovies(path, movieOptions);
    setCurrentMovies(data.results);
  }

  async function getMoviesWithGenre() {
    movieWithGenreOptions.params.page = currentPage;
    // movieWithGenreOptions.params.with_genres = Number(id);
    //const data = await fetchMovies("discover/movie", movieOptions);
    const data = await fetchMoviesWithGenre(
      Number(id),
      "",
      movieWithGenreOptions
    );
    setCurrentMovies(data.results);
  } */
