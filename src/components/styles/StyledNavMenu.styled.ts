import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledNavMenu = styled.div`
  display: flex;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export default StyledNavMenu;
