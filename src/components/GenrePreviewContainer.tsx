import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import SwipeSlider from "./SwipeSlider";
import { Movie } from "./_types";
import MovieContainer from "./styles/MovieContainer.styled";
import GenrePreviewLoading from "./styles/GenrePreviewLoading.styled";

interface Props {
  data: Movie[] | null;
  title: string;
  id: number;
  autoplay?: boolean;
}

const headerStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const GenrePreviewContainer: React.FC<Props> = ({
  data,
  title,
  id,
  autoplay,
}) => {
  return (
    <>
      <Container>
        <div style={headerStyles}>
          <h2>{title}</h2>
          <Link to={`/genre/${id}`}>View more</Link>
        </div>
        <SwipeSlider data={data} autoplay={autoplay} />
      </Container>
    </>
  );
};

export default GenrePreviewContainer;
