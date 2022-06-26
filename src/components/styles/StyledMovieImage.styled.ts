import styled from "styled-components";

const StyledMovieImage = styled.img`
  width: 100%;
  cursor: pointer;
  /* min-height: 402px; */
  /* object-fit: cover; */
  border: 2px solid rgb(255, 255, 255, 0.15);
  transition: ease-in;
  transition-duration: 100ms;

  &:hover {
    transform: scale(1.04);
  }
`;

export default StyledMovieImage;
