import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledNavigation = styled.nav`
  display: flex;
  padding: 25px 50px;
  position: absolute;
  width: 100%;
  max-width: 100vw;
  top: 0;
  z-index: 2;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 1)
  );

  @media ${device.tablet} {
    display: none;
  }
`;

export default StyledNavigation;
