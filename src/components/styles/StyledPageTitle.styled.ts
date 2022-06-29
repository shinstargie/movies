import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledPageTitle = styled.h1`
  font-size: 65px;
  line-height: 1;
  margin: 0;

  @media ${device.laptopL} {
    font-size: 50px;
  }

  @media ${device.laptop} {
    font-size: 40px;
  }
`;

export default StyledPageTitle;
