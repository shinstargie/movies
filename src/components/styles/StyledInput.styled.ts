import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledInput = styled.input<{ mobileMenu?: boolean }>`
  background-color: black;
  color: yellow;
  caret-color: white;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  padding: 10px 15px;
  height: 45px;
  width: 250px;
  font-size: 18px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.5);

  &:focus-visible {
    outline: none !important;
    border-color: rgba(255, 255, 255, 1);
  }

  @media ${device.laptop} {
    width: 175px;
  }

  @media ${device.tablet} {
    width: 100%;
    flex-shrink: 1;
    margin-right: 25px;
  }
`;

export default StyledInput;
