import styled from "styled-components";
import { device } from "./_breakpoints";

const MovieContainer = styled.div`
  display: grid;
  min-height: 100vh;
  max-width: 1440px;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px;
  margin-bottom: 40px;
  margin: 0 auto;

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default MovieContainer;
