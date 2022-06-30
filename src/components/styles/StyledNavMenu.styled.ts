import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledNavMenu = styled.div<{ menuOpen: boolean }>`
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    flex-direction: column;
    width: 100%;
    position: fixed;
    padding: 60px;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
  }
`;

export default StyledNavMenu;
