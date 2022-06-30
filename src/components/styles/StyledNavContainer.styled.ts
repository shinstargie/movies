import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledNavConainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1340px;
  justify-content: space-between;

  @media ${device.tablet} {
    /*  */
    justify-content: space-around;
    flex-direction: column;
    /* position: fixed;
    padding: 60px;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0; 
    background-color: black;
    */
  }
`;

export default StyledNavConainer;

/* display: ${({ menuOpen }) => (menuOpen ? "flex" : "none")}; */
