import React from "react";
import StyledHeroContainer from "./styles/StyledHeroContainer.styled";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

const HeroContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <StyledHeroContainer>{children}</StyledHeroContainer>
    </>
  );
};

export default HeroContainer;
