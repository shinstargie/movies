import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledHeroDescription = styled.p`
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 25px;

  @media ${device.laptop} {
    font-size: 18px;
  }

  @media ${device.tablet} {
    font-size: 14px;
  }
`;

export default StyledHeroDescription;
