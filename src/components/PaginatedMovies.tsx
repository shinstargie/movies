import React, { useState, useContext } from "react";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { fetchTrailer, IMAGE_PATH } from "../api";
import MovieImage from "./MovieImage";
import MovieContainer from "./styles/MovieContainer.styled";
import StyledMovieCardLoader from "./styles/StyledMovieCardLoader.styled";
import { Genre, Movie } from "./_types";
import { GenreContext } from "./../context/GenreContext";
import CustomModal from "./CustomModal";

interface Props {
  data: Movie[] | null;
  onPageChange: (event: { selected: number }) => void;
  totalPages?: number;
  resetPage?: number;
}

/* interface Params {
  id: string;
} */

const PaginatedMovies: React.FC<Props> = ({
  data,
  onPageChange,
  totalPages: totalpages,
  resetPage,
}) => {
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

  /*const [remountComponent, setRemountComponent] = useState(0);

   useEffect(() => {
    setRemountComponent(Math.random());
    return () => setRemountComponent(Math.random());
  }, []); */

  return (
    <>
      <div key={resetPage}>
        <CustomModal
          loading={loading}
          toggleModal={toggleModal}
          closeModal={() => setToggleModal(!toggleModal)}
          movie={currentMovie}
          matchedGenres={currentGenres}
        />

        <MovieContainer>
          {!data &&
            loadingItems.map((item, idx) => (
              <StyledMovieCardLoader key={idx} />
            ))}

          {data?.map((movie: any) => (
            <div key={movie.id} style={{ position: "relative" }}>
              <MovieImage
                /* key={movie.id} */
                src={IMAGE_PATH + `${movie.poster_path}`}
                alt={movie.title}
                onClick={() => openModal(movie)}
              />
              {movie.vote_average !== 0 && (
                <div
                  style={{
                    position: "absolute",
                    border: "2px solid rgba(255,240,0,0.50)",
                    boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.60)",
                    color: "yellow",
                    fontSize: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    top: "-14px",
                    right: "-14px",
                    height: "40px",
                    width: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#b20600",
                  }}
                >
                  {movie.vote_average.toFixed(1)}
                </div>
              )}
            </div>
          ))}
        </MovieContainer>

        <ReactPaginate
          previousLabel="< previous"
          breakLabel="..."
          nextLabel="next >"
          initialPage={0}
          onPageChange={onPageChange}
          pageRangeDisplayed={5}
          /* pageCount={discoverRoutePageCountLimit} */
          pageCount={totalpages ? totalpages : pageLimitSetByApi}
          renderOnZeroPageCount={() => null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
        />
      </div>
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
