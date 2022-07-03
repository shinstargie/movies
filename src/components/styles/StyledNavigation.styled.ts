import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledNavigation = styled.nav`
  display: flex;
  padding: 25px 50px;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 100vw;
  z-index: 2;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 1)
  );

  @media ${device.laptop} {
    padding: 25px 25px;
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    position: absolute;
    justify-content: end;
    z-index: 5000;
  }
`;

export default StyledNavigation;
