import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ReactPaginate from "react-paginate";
import { fetchTrailer, IMAGE_PATH } from "../api";
import MovieImage from "./MovieImage";
import MovieContainer from "./styles/MovieContainer.styled";
import StyledMovieCardLoader from "./styles/StyledMovieCardLoader.styled";
import { Movie } from "./_types";
import CustomModal from "./CustomModal";
import StyledMovieRating from "./styles/StyledMovieRating.styled";
import StyledNoResults from "./styles/StyledNoResults.styled";
import TrailerModal from "./TrailerModal";

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
  const loadingItems = Array.from({ length: 20 }, (_, i) => i + 1);
  // hard page limit with /discover route implemented by API
  const pageLimitSetByApi = 500;
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  useEffect(() => window.scrollTo(0, 0), [data]);

  async function getTrailer(movie: Movie) {
    const trailer = await fetchTrailer(movie.id);
    if (!trailer) return toast.error("Trailer unavailable");
    movie.trailerKey = trailer.key;
    setCurrentMovie(movie);
    setToggleModal(!toggleModal);
    document.body.style.overflow = "hidden";
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
        toggleModal={toggleModal}
        closeModal={closeModal}
        content={<TrailerModal movie={currentMovie} closeModal={closeModal} />}
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
              onClick={() => getTrailer(movie)}
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
