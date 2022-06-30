import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledNavConainer = styled.div<{ menuOpen: boolean }>`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1340px;
  justify-content: space-between;

  @media ${device.tablet} {
    display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")};
    justify-content: start;
    flex-direction: column;
    position: fixed;
    padding: 60px;
    top: 0;
    left: 0;
    right: 0;
    background-color: black;
    height: 100vh;
  }
`;

export default StyledNavConainer;
