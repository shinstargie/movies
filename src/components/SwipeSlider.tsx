import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, A11y, Autoplay } from "swiper";
import Container from "./Container";
import { Movie } from "./_types";
import { fetchTrailer, IMAGE_PATH } from "./../api";
import MovieImage from "./MovieImage";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import toast from "react-hot-toast";
import TrailerModal from "./TrailerModal";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { swiperBreakpoints } from "./styles/_breakpoints";
import StyledMovieRating from "./styles/StyledMovieRating.styled";
import CustomModal from "./CustomModal";

interface Props {
  data: Movie[] | null;
  autoplay?: boolean;
}

const SwipeSlider: React.FC<Props> = ({ data, autoplay }) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

  async function getTrailer(movie: Movie) {
    const trailer = await fetchTrailer(movie.id);
    if (!trailer) return toast.error("Trailer unavailable");
    movie.trailerKey = trailer.key;
    setCurrentMovie(movie);
    setToggleModal(!toggleModal);
  }

  function closeModal() {
    document.body.style.overflow = "auto";
    setToggleModal(!toggleModal);
  }

  return (
    <>
      <Container>
        <CustomModal
          toggleModal={toggleModal}
          closeModal={closeModal}
          content={
            <TrailerModal movie={currentMovie} closeModal={closeModal} />
          }
        />

        <Swiper
          breakpoints={swiperBreakpoints}
          modules={[Pagination, Navigation, Autoplay, A11y]}
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
                  onClick={() => getTrailer(movie)}
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

/* slidesPerView={6} */
