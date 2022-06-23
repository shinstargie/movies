import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Pagination, Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Container from "./Container";
import { Movie, Genre } from "./_types";
import { fetchTrailer, fetchGenres, IMAGE_PATH } from "./../api";
import MovieImage from "./MovieImage";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import toast from "react-hot-toast";
import { modalStyles } from "./styles/customStyles";
import TrailerModal from "./TrailerModal";
import Modal from "react-modal";

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
          modules={[Pagination, Navigation, A11y]}
          slidesPerView={6}
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

/*
const [pageLoading, setPageLoading] = useState<boolean>(true);
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
        with_genres: 10752,
        page: 1,
      },
    });

    setData(data.results);
  } */
