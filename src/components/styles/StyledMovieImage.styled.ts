import styled from "styled-components";

const StyledMovieImage = styled.img`
  width: 100%;
  cursor: pointer;
  max-height: 402px;
  object-fit: cover;
  /* transition: ease-in;
  transition-duration: 100ms; */

  &:hover {
    transform: scale(1.01);
  }
`;

export default StyledMovieImage;
