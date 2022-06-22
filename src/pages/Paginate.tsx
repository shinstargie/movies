import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import api from "./../api";
import { Movie } from "../components/_types";
import MovieImage from "./../components/MovieImage";
import MovieContainer from "./../components/styles/MovieContainer.styled";
import Container from "../components/Container";
import Section from "./../components/Section";

interface Props {}

const Paginate: React.FC<Props> = ({}) => {
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
  const [currentMovies, setCurrentMovies] = useState<Movie[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const discoverRoutePageCountLimit = 500; // hard page limit with /discover route implemented by API

  useEffect(() => {
    getData();
  }, [currentPage]);

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

  // Invoke when user click to request another page.
  const handlePageClick = (event: { selected: number }) => {
    setCurrentPage(event.selected + 1);
  };

  async function openModal(movie: Movie) {}

  return (
    <>
      <Section>
        <Container>
          <MovieContainer>
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
            /* activeLinkClassName="active" */
          />
        </Container>
      </Section>
    </>
  );
};

export default Paginate;
