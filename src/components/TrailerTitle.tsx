import React from "react";
import StyledTrailerTitle from "./styles/StyledTrailerTitle";

interface Props {
  text?: string;
}

const TrailerTitle: React.FC<Props> = ({ text }) => {
  return <StyledTrailerTitle>{text}</StyledTrailerTitle>;
};

export default TrailerTitle;
