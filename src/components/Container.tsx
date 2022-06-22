import React from "react";
import StyledContainer from "./styles/StyledContainer.styled";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
