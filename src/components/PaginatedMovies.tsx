import React, { useState, useContext, useEffect } from "react";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { fetchTrailer, IMAGE_PATH } from "../api";
import MovieImage from "./MovieImage";
import MovieContainer from "./styles/MovieContainer.styled";
import StyledMovieCardLoader from "./styles/StyledMovieCardLoader.styled";
import { Genre, Movie } from "./_types";
import { GenreContext } from "./../context/GenreContext";
import CustomModal from "./CustomModal";
import StyledMovieRating from "./styles/StyledMovieRating.styled";
import StyledNoResults from "./styles/StyledNoResults.styled";

interface Props {
  data: Movie[] | null;
  onPageChange: (event: { selected: number }) => void;
  totalPages?: number;
  resetPage?: number;
}

const rerenderWrapperStyles = {
  maxWidth: "1340px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "end",
};

const PaginatedMovies: React.FC<Props> = ({
  data,
  onPageChange,
  totalPages,
  resetPage,
}) => {
  const loadingItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  // hard page limit with /discover route implemented by API
  const pageLimitSetByApi = 500;
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [currentGenres, setCurrentGenres] = useState<Genre[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { genres } = useContext(GenreContext);

  useEffect(() => window.scrollTo(0, 0), [data]);

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

    document.body.style.overflow = "hidden";

    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 1200);
  }

  function closeModal() {
    document.body.style.overflow = "visible";
    setToggleModal(!toggleModal);
  }

  function getPageCount() {
    if (data?.length === 0 || totalPages === 1) return 0;
    return totalPages ? totalPages : pageLimitSetByApi;
  }

  return (
    <>
      <CustomModal
        loading={loading}
        toggleModal={toggleModal}
        /* closeModal={() => setToggleModal(!toggleModal)} */
        closeModal={closeModal}
        movie={currentMovie}
        matchedGenres={currentGenres}
      />

      {data?.length === 0 && (
        <StyledNoResults>No results found</StyledNoResults>
      )}

      <MovieContainer>
        {!data &&
          loadingItems.map((item, idx) => <StyledMovieCardLoader key={idx} />)}

        {data?.map((movie: Movie) => (
          <div key={movie.id} style={{ position: "relative" }}>
            <MovieImage
              src={IMAGE_PATH + `${movie.poster_path}`}
              alt={movie.title}
              onClick={() => openModal(movie)}
            />
            {movie.vote_average !== 0 && (
              <StyledMovieRating>
                {movie.vote_average.toFixed(1)}
              </StyledMovieRating>
            )}
          </div>
        ))}
      </MovieContainer>

      {/* wrapping pagination component with a random key so it's rerendered to show the new active page */}
      <div style={rerenderWrapperStyles} key={resetPage}>
        <ReactPaginate
          previousLabel="< previous"
          breakLabel="..."
          nextLabel="next >"
          initialPage={0}
          onPageChange={onPageChange}
          pageRangeDisplayed={5}
          /* pageCount={discoverRoutePageCountLimit} */
          /* pageCount={totalpages ? totalpages : pageLimitSetByApi} */
          pageCount={getPageCount()}
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
