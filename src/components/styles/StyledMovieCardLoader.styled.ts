import styled from "styled-components";
import device from "./_breakpoints";

const StyledMovieCardLoader = styled.div`
  display: block;
  width: 100%;
  height: 408px;
  background-color: rgb(255, 255, 255, 0.2);

  @media ${device.laptopL} {
    height: 485px;
  }

  @media ${device.laptop} {
    height: 448px;
  }

  @media ${device.tablet} {
    height: 487px;
  }

  @media ${device.mobileL} {
    height: 485px;
  }
`;

export default StyledMovieCardLoader;
