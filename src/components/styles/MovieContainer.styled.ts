import styled from "styled-components";
import device from "./_breakpoints";

const MovieContainer = styled.div`
  display: grid;
  justify-content: end;
  width: 100%;
  grid-template-columns: repeat(5, auto);
  grid-gap: 20px;

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
