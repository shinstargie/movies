import styled from "styled-components";
import device from "./_breakpoints";

const MovieContainer = styled.div`
  display: grid;
  min-height: 100vh;
  max-width: 1440px;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;
  margin-bottom: 40px;
  margin: 0 auto;

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, auto);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, auto);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, auto);
    grid-gap: 30px;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, auto);
  }
`;

export default MovieContainer;
