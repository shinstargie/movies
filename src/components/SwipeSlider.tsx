import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, A11y, Autoplay } from "swiper";
import Container from "./Container";
import { Movie, Genre } from "./_types";
import { fetchTrailer, fetchGenres, IMAGE_PATH } from "./../api";
import MovieImage from "./MovieImage";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import toast from "react-hot-toast";
import { modalStyles } from "./styles/customStyles";
import TrailerModal from "./TrailerModal";
import Modal from "react-modal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperBreakpoints } from "./styles/_breakpoints";
import StyledMovieRating from "./styles/StyledMovieRating.styled";

const SwiperButtonPrevious = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <button
      className="swiper-btn swiper-btn-left"
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <button
      className="swiper-btn swiper-btn-right"
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};

interface Props {
  data: Movie[] | null;
  autoplay?: boolean;
}

const SwipeSlider: React.FC<Props> = ({ data, autoplay }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const [genres, setGenres] = useState<Genre[] | null>(null);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [currentGenres, setCurrentGenres] = useState<Genre[] | null>(null);

  useEffect(() => {
    getGenres();
  }, []);

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

  return (
    <>
      <Container>
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

        <Swiper
          breakpoints={swiperBreakpoints}
          modules={[Pagination, Navigation, Autoplay, A11y]}
          /* slidesPerView={6} */
          spaceBetween={25}
          navigation
          pagination={{ clickable: true }}
          autoplay={autoplay}
        >
          <SwiperButtonPrevious>
            <AiOutlineLeft size={30} />
          </SwiperButtonPrevious>
          <SwiperButtonNext>
            <AiOutlineRight size={30} />
          </SwiperButtonNext>
          {data &&
            data.map((movie: Movie) => (
              <SwiperSlide key={movie.id}>
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
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </>
  );
};

export default SwipeSlider;
