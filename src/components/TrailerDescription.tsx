import React from "react";
import StyledDescription from "./styles/StyledDescription.styled";

interface Props {
  text: string;
}

const TrailerDescription: React.FC<Props> = ({ text }) => {
  return <StyledDescription>{text}</StyledDescription>;
};

export default TrailerDescription;
