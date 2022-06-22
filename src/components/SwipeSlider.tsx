import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "./Container";
import { Movie, Genre } from "./_types";
import api from "./../api";
import MovieImage from "./MovieImage";

interface Props {}

const SwiperButtonPrevious: React.FC<Props> = ({ children }: any) => {
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

const SwipeSlider: React.FC<Props> = ({}) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<Movie[] | null>(null);

  useEffect(() => {
    getMovies();
    setLoading(false);
  }, []);

  async function getMovies() {
    const { data } = await api.get("discover/movie", {
      params: {
        language: "en-US",
        include_adult: false,
        with_genres: 28,
        page: 1,
      },
    });

    setData(data.results);
  }

  async function openModal(movie: Movie) {}

  return (
    <>
      <Container>
        <Swiper
          modules={[Pagination, Navigation, A11y]}
          slidesPerView={5}
          spaceBetween={25}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperButtonPrevious>{"<"}</SwiperButtonPrevious>
          <SwiperButtonNext>{">"}</SwiperButtonNext>
          {!loading &&
            data &&
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
