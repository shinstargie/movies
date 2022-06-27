import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledSection = styled.section`
  position: relative;
  padding: 75px 50px;

  @media ${device.laptopL} {
    padding: 50px 25px;
  }
`;

export default StyledSection;
