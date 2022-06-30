import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledRelativeDiv = styled.div<{ isHidden?: boolean }>`
  position: relative;

  @media ${device.tablet} {
    display: ${({ isHidden }) => (isHidden ? "none" : "block")};
  }
`;

export default StyledRelativeDiv;
