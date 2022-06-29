import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledGenreHeaderWrap = styled.div`
  display: inline-block;
  position: relative;
  bottom: -40px;
  z-index: 2;
  margin-left: 50px;

  @media ${device.laptopL} {
    margin-left: 0px;
  }
`;

export default StyledGenreHeaderWrap;
