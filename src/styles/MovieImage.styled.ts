import styled from "styled-components";
import device from "./_breakpoints";

const MovieImage = styled.img`
  width: 100%;
  height: 348px;
  object-fit: cover;
  cursor: pointer;
  transition: ease-in;
  transition-duration: 100ms;

  &:hover {
    transform: scale(1.02);
  }

  @media ${device.laptopL} {
    height: 450px;
  }
`;

export default MovieImage;
