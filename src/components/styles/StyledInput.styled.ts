import styled from "styled-components";

const StyledInput = styled.input`
  background-color: black;
  color: white;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  padding: 10px 15px;
  height: 45px;
  width: 250px;
  font-size: 18px;

  &:focus-visible {
    outline: none !important;
    border-color: rgba(255, 255, 255, 1);
  }
`;

export default StyledInput;
