import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledDescription = styled.div`
  font-size: 20px;
  line-height: 1.25;
  margin-top: 20px;

  @media ${device.tablet} {
    display: none;
  }
`;

export default StyledDescription;
