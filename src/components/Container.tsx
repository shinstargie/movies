import React from "react";
import StyledContainer from "./styles/StyledContainer.styled";

interface Props {
  children: JSX.Element[] | JSX.Element;
  med?: boolean;
}

const Container: React.FC<Props> = ({ children, med }) => {
  return <StyledContainer med={med}>{children}</StyledContainer>;
};

export default Container;
