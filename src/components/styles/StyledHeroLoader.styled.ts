import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledHeroLoader = styled.div`
  height: 850px;
  margin: 50px;
  background-color: ${({ theme }) => theme.colors.loading};

  @media ${device.mobileL} {
    height: 600px;
    margin: 25px;
  }
`;

export default StyledHeroLoader;
