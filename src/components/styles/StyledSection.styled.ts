import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledSection = styled.section`
  position: relative;
  padding: 150px 50px;

  @media ${device.laptopL} {
    padding: 100px 25px;
  }
`;

export default StyledSection;
