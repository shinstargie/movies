import React from "react";
import StyledNavigation from "./styles/StyledNavigation.styled";
import NavigationLink from "./NavigationLink";
import Container from "./Container";
import Section from "./Section";

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
  return (
    <>
      <Container>
        <StyledNavigation>
          <NavigationLink to="/" text="Home" />
          <NavigationLink to="/popular" text="Popular" />
        </StyledNavigation>
      </Container>
    </>
  );
};

export default Navigation;
