import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledMobileHomLink = styled(Link)`
  display: none;

  @media ${device.tablet} {
    display: inline-block;
    margin-right: 25px;
  }
`;

export default StyledMobileHomLink;
