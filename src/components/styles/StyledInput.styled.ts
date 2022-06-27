import styled from "styled-components";

const StyledInput = styled.input`
  background-color: black;
  color: yellow;
  caret-color: white;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  padding: 10px 15px;
  height: 45px;
  width: 250px;
  font-size: 18px;
  box-shadow: 0px 5px 25px rgba(0, 0, 0, 1);

  &:focus-visible {
    outline: none !important;
    border-color: rgba(255, 255, 255, 1);
  }
`;

export default StyledInput;
