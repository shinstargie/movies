import React, { useContext, useState, useEffect } from "react";
import ModalTitle from "./ModalTitle";
import Trailer from "./Trailer";
import TrailerDescription from "./TrailerDescription";
import { Genre, Movie } from "./_types";
import TrailerLoading from "./styles/TrailerLoading.styled";
import Section from "./Section";
import Container from "./Container";
import StyledRelativeDiv from "./styles/StyledRelativeDiv.styled";
import StyledSpan from "./styles/StyledSpan.styled";
import StyledButton from "./styles/StyledButton";
import StyledTrailerHeader from "./styles/StyledTrailerHeader.styled";
import ModalMetaInfoWrap from "./styles/ModalMetaInfoWrap.styled";
import { GenreContext } from "./../context/GenreContext";

interface Props {
  movie: Movie | null | undefined;
  loading?: boolean;
  closeModal: () => void;
}

const TrailerModal: React.FC<Props> = ({ movie, closeModal }) => {
  const { genres, genresLoading } = useContext(GenreContext);
  const [matchedGenres, setMatchedGenres] = useState<Genre[] | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (genres && movie) {
      const matchedGenres = genres.filter(
        (obj) => movie?.genre_ids.indexOf(obj.id) !== -1
      );
      setMatchedGenres(matchedGenres);
    }

    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, [genresLoading, movie]);

  return (
    <>
      <Section>
        <Container>
          <StyledTrailerHeader>
            <ModalTitle text={movie?.title} />
            <StyledButton primary noSpace onClick={closeModal}>
              Close
            </StyledButton>
          </StyledTrailerHeader>

          <StyledRelativeDiv>
            {loading && (
              <TrailerLoading>
                <img style={{ width: "150px" }} src="/ytb-loading-state.gif" />
              </TrailerLoading>
            )}

            <Trailer trailer={movie} />
          </StyledRelativeDiv>

          <StyledRelativeDiv isHidden={true}>
            <StyledSpan margin="15px 20px 0px 0px">
              Relase date: {movie?.release_date}
            </StyledSpan>
            Genres:{" "}
            {matchedGenres?.map((genre) => (
              <ModalMetaInfoWrap key={genre.id}>{genre.name}</ModalMetaInfoWrap>
            ))}
          </StyledRelativeDiv>

          <TrailerDescription text={movie?.overview} />
        </Container>
      </Section>
    </>
  );
};

export default TrailerModal;

/* if (movie) getTrailer(movie); */

/* async function getTrailer(movie: Movie) {
    setLoading(true);
    // const trailer = await fetchTrailer(movie.id);
    // if (!trailer) return toast.error("Trailer unavailable");
    // movie.trailerKey = trailer.key; 
    // setCurrentMovie(movie);
    document.body.style.overflow = "hidden";
    setShowTrailer(true);

    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setLoading(false);
    }, 1200);
  } */

/* 

trailerGenres: Genre[] | null;

trailerGenres,


  function matchGenres(movie: Movie) {
    if (genres) {
      const matchedGenres = genres.filter(
        (obj) => movie.genre_ids.indexOf(obj.id) !== -1
      );
      setMatchedGenres(matchedGenres);
    }
  }


*/
