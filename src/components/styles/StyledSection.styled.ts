import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledSection = styled.section<{ top: boolean | undefined }>`
  position: relative;
  padding: ${({ top }) => (top ? "150px 50px" : "75px 50px")};

  @media ${device.laptopL} {
    padding: ${({ top }) => (top ? "150px 25px" : "75px 25px")};
  }

  @media ${device.laptop} {
    padding: ${({ top }) => (top ? "100px 25px" : "50px 25px")};
  }
`;

export default StyledSection;
