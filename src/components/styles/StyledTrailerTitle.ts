import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledTrailerTitle = styled.h1`
  font-size: 60px;
  max-width: 85%;
  font-weight: 900;
  margin: 0;
  margin-bottom: 25px;

  @media ${device.tablet} {
    display: none;
  }
`;

export default StyledTrailerTitle;
