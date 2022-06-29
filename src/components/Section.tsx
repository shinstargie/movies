import React from "react";
import StyledSection from "./styles/StyledSection.styled";

interface SectionProps {
  children: JSX.Element[] | JSX.Element;
  top?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, top }) => {
  return <StyledSection top={top}>{children}</StyledSection>;
};

export default Section;
