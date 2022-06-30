import React from "react";
import Container from "./Container";
import SwipeSlider from "./SwipeSlider";
import { Movie } from "./_types";
import StyledH2 from "./styles/StyledH2.styled";
import StyledGenreHeaderWrap from "./styles/StyledGenreHeaderWrap.styled";
import StyledTextLink from "./styles/StyledTextLink.styled";

interface Props {
  data: Movie[] | null;
  title: string;
  id: number;
  autoplay?: boolean;
}

const GenrePreviewContainer: React.FC<Props> = ({
  data,
  title,
  id,
  autoplay,
}) => {
  return (
    <>
      <Container>
        <StyledGenreHeaderWrap>
          <StyledH2>{title}</StyledH2>
          <StyledTextLink to={`/genre/${id}`}>See more {">"}</StyledTextLink>
        </StyledGenreHeaderWrap>
        <SwipeSlider data={data} autoplay={autoplay} />
      </Container>
    </>
  );
};

export default GenrePreviewContainer;
