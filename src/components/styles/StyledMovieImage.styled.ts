import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledMovieImage = styled.img`
  width: 100%;
  height: 350px;
  /* max-width: 268px; */
  cursor: pointer;
  /* height: 100%; */
  /* max-height: 402px; */
  object-fit: cover;
  border: 1px solid rgb(255, 255, 255, 0.2);
  transition: ease-in-out;
  transition-duration: 100ms;

  &:hover {
    transform: scale(1.03);
  }

  @media ${device.laptopL} {
    height: 380px;
  }

  @media ${device.laptop} {
    height: 100%;
  }

  @media ${device.laptopL} {
    margin-left: 0px;
  }
`;

export default StyledMovieImage;
