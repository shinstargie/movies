import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledH2Title = styled.div`
  display: inline-block;
  margin: 0px;
  font-size: 28px;
  font-weight: 700;
  line-height: 1;

  @media ${device.laptop} {
    font-size: 22px;
  }
`;

export default StyledH2Title;
