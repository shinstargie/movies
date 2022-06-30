import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledHeroTitle = styled.h1`
  font-size: 60px;
  font-weight: 800;
  line-height: 1.15;
  margin-bottom: 0px;

  @media ${device.laptop} {
    font-size: 50px;
  }

  @media ${device.tablet} {
    font-size: 40px;
  }
`;

export default StyledHeroTitle;
