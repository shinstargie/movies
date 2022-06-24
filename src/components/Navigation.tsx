import React from "react";
import StyledNavigation from "./styles/StyledNavigation.styled";
import NavigationLink from "./NavigationLink";
import Container from "./Container";
import Section from "./Section";

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
  return (
    <>
      <Section>
        <Container>
          <StyledNavigation>
            <NavigationLink to="/" text="Home" />
            <NavigationLink to="/popular" text="Popular" />
            <NavigationLink to="/paginate" text="Paginate" />
            {/* <NavigationLink to="/genre/:id" text="By Genre" /> */}
          </StyledNavigation>
        </Container>
      </Section>
    </>
  );
};

export default Navigation;
