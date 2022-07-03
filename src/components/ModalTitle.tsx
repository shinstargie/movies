import React from "react";
import StyledTrailerTitle from "./styles/StyledTrailerTitle";

interface Props {
  text: string | undefined;
}

const TrailerTitle: React.FC<Props> = ({ text }) => {
  return <StyledTrailerTitle>{text}</StyledTrailerTitle>;
};

export default TrailerTitle;
