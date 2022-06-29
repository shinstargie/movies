import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledNavConainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1340px;
  justify-content: space-between;

  @media ${device.laptop} {
  }
`;

export default StyledNavConainer;
