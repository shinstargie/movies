import styled from "styled-components";

const StyledMovieImage = styled.img`
  width: 100%;
  /* max-width: 268px; */
  cursor: pointer;
  height: 100%;
  max-height: 402px;
  object-fit: cover;
  border: 1px solid rgb(255, 255, 255, 0.2);
  transition: ease-in-out;
  transition-duration: 100ms;

  &:hover {
    transform: scale(1.03);
  }
`;

export default StyledMovieImage;
