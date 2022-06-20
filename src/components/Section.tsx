import React from "react";
import StyledSection from "./styles/Section.styled";

interface SectionProps {
  children: JSX.Element[] | JSX.Element;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
