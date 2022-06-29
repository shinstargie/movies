import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledNavigationLink = styled.div`
  display: inline-block;
  font-size: 20px;
  padding: 15px 0px;
  background-color: transparent;
  border: none;
  margin-right: 20px;

  @media ${device.laptop} {
    font-size: 15px;
    margin-right: 15px;
  }
`;

export default StyledNavigationLink;
