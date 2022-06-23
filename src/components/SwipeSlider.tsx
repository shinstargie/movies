import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "./Container";
import { Movie, Genre } from "./_types";
import { api, IMAGE_PATH } from "./../api";
import MovieImage from "./MovieImage";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

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
}

const SwipeSlider: React.FC<Props> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(true);
  // const [data, setData] = useState<Movie[] | null>(null);

  /*  useEffect(() => {
    getMovies();
    setLoading(false);
  }, []);

  async function getMovies() {
    const { data } = await api.get("discover/movie", {
      params: {
        language: "en-US",
        include_adult: false,
        with_genres: 10752,
        page: 1,
      },
    });

    setData(data.results);
  } */

  async function openModal(movie: Movie) {}

  return (
    <>
      <Container>
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          slidesPerView={7}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperButtonPrevious>
            <AiOutlineLeft size={20} />
          </SwiperButtonPrevious>
          <SwiperButtonNext>
            <AiOutlineRight size={20} />
          </SwiperButtonNext>
          {data &&
            data.map((movie: Movie) => (
              <SwiperSlide key={movie.id}>
                <MovieImage
                  src={IMAGE_PATH + `${movie.poster_path}`}
                  alt={movie.title}
                  onClick={() => openModal(movie)}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </Container>
    </>
  );
};

export default SwipeSlider;
