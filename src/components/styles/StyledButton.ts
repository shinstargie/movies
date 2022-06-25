import styled from "styled-components";

const StyledButton = styled.button<{ primary?: boolean }>`
  padding: 15px 20px;
  font-size: 20px;
  cursor: pointer;
  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.red : theme.colors.black};
  color: white;
  border-color: white;
  border-style: solid;
  transition: background-color 250ms ease-in;
  transition: transform 50ms ease;

  &:hover {
    background-color: ${({ theme, primary }) =>
      primary ? theme.colors.black : theme.colors.red};
  }

  &:active {
    transform: scale(0.99);
  }
`;

export default StyledButton;
