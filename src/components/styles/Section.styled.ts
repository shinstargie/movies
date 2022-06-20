import styled from "styled-components";
import device from "./_breakpoints";

const StyledSection = styled.div`
  padding: 75px;

  @media ${device.laptop} {
    padding: 25px;
  }
`;

export default StyledSection;
