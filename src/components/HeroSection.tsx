import React from "react";
import StyledHeroSection from "./styles/StyledHeroSection.styled";

interface Props {
  bgImg: string | undefined;
  children: JSX.Element[] | JSX.Element;
}

const HeroSection: React.FC<Props> = ({ children, bgImg }) => {
  return (
    <>
      <StyledHeroSection bgImg={bgImg}>{children}</StyledHeroSection>
    </>
  );
};

export default HeroSection;
