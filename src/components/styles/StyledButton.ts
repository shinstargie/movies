import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledButton = styled.button<{ primary?: boolean; noSpace?: boolean }>`
  padding: 15px 20px;
  font-size: 20px;
  /* margin-right: 25px; */
  margin-right: ${({ noSpace }) => (noSpace ? "0" : "25px")};
  cursor: pointer;
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.red : theme.colors.black};
  color: white;
  border-color: white;
  border-style: solid;
  transition: background-color 250ms ease-in-out;

  &:active {
    transform: scale(0.99);
  }

  @media ${device.laptop} {
    font-size: 16px;
    padding: 12px 26px;
    margin-right: 15px;
  }

  @media ${device.mobileM} {
    font-size: 12px;
    padding: 12px 16px;
  }
`;

export default StyledButton;

/* &:hover {
    background-color: ${({ theme, primary }) =>
    primary ? theme.colors.black : theme.colors.red};
  } */
