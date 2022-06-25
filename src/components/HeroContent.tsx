import React from "react";
import StyledHeroContent from "./styles/StyledHeroContent.styled";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const HeroContent: React.FC<Props> = ({ children }) => {
  return (
    <>
      <StyledHeroContent>{children}</StyledHeroContent>
    </>
  );
};

export default HeroContent;
