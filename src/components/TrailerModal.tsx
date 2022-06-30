import React from "react";
import ModalTitle from "./ModalTitle";
import Trailer from "./Trailer";
import TrailerDescription from "./TrailerDescription";
import { Genre, Movie } from "./_types";
import TrailerLoading from "./styles/TrailerLoading.styled";
import Section from "./Section";
import Container from "./Container";
import StyledRelativeDiv from "./styles/StyledRelativeDiv.styled";
import ModalMetaInfoWrap from "./styles/ModalMetaInfoWrap.styled";
import StyledSpan from "./styles/StyledSpan.styled";

interface Props {
  movie: Movie;
  loading: boolean;
  trailerGenres: Genre[] | null;
}

const TrailerModal: React.FC<Props> = ({ movie, loading, trailerGenres }) => {
  return (
    <Section>
      <Container>
        <ModalTitle text={movie.title} />
        <StyledRelativeDiv>
          {loading && (
            <TrailerLoading>
              <img style={{ width: "150px" }} src={"/ytb-loading-state.gif"} />
            </TrailerLoading>
          )}

          <Trailer trailer={movie} />
        </StyledRelativeDiv>

        <StyledRelativeDiv isHidden={true}>
          <StyledSpan margin="15px 20px 0px 0px">
            Relase date: {movie.release_date}
          </StyledSpan>
          Genres:{" "}
          {trailerGenres?.map((genre) => (
            <ModalMetaInfoWrap key={genre.id}>{genre.name}</ModalMetaInfoWrap>
          ))}
        </StyledRelativeDiv>

        <TrailerDescription text={movie.overview} />
      </Container>
    </Section>
  );
};

export default TrailerModal;
