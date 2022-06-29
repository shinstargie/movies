import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledTextLink = styled(Link)`
  display: inline-block;
  position: relative;
  bottom: 1px;
  margin-left: 10px;
  color: yellow;

  &:hover {
    opacity: 70%;
  }
`;

export default StyledTextLink;
