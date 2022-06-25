import styled from "styled-components";

const StyledMovieImage = styled.img`
  width: 100%;
  cursor: pointer;
  /* transition: ease-in;
  transition-duration: 100ms; */

  &:hover {
    transform: scale(1.01);
  }
`;

export default StyledMovieImage;
