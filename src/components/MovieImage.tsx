import React from "react";
import StyledMovieImage from "./styles/StyledMovieImage.styled";

interface Props {
  src: string;
  alt: string;
  onClick: () => void;
}

const MovieImage: React.FC<Props> = ({ src, alt, onClick }) => {
  return <StyledMovieImage src={src} alt={alt} onClick={onClick} />;
};

export default MovieImage;
