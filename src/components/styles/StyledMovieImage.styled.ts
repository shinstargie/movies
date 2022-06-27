import styled from "styled-components";

const StyledMovieImage = styled.img`
  width: 100%;
  cursor: pointer;
  max-height: 402px;
  object-fit: cover;
  border: 1px solid rgb(255, 255, 255, 0.2);
  /* transition: ease-in;
  transition-duration: 100ms; */

  &:hover {
    transform: scale(1.02);
  }
`;

export default StyledMovieImage;
