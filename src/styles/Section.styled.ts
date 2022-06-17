import styled from "styled-components";
import device from "./_breakpoints";

const Section = styled.div`
  padding: 75px;

  @media ${device.laptop} {
    padding: 50px;
  }
`;

export default Section;
