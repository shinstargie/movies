import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledMobileMenuIcon = styled.img`
  display: none;

  @media ${device.tablet} {
    width: 30px;
    height: 30px;
    cursor: pointer;
    max-width: 100%;
    display: block;
    z-index: 1;

    &:hover {
      opacity: 90%;
    }
  }
`;

export default StyledMobileMenuIcon;
