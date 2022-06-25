import React from "react";
import StyledNavigation from "./styles/StyledNavigation.styled";
import NavigationLink from "./NavigationLink";
import Container from "./Container";

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
  return (
    <>
      <StyledNavigation>
        <Container>
          <NavigationLink to="/" text="Home" />
          <NavigationLink to="/popular" text="Popular" />
        </Container>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
