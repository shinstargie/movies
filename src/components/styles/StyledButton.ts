import styled from "styled-components";

const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 15px 20px;
  font-size: 20px;
  margin-right: 25px;
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
`;

export default StyledButton;

/* &:hover {
    background-color: ${({ theme, primary }) =>
    primary ? theme.colors.black : theme.colors.red};
  } */
