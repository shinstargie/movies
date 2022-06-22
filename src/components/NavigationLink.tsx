import { NavLink } from "react-router-dom";
import React from "react";
import StyledNavigationLink from "./styles/StyledNavigationLink";

interface Props {
  text: string;
  to: string;
}

const NavigationLink: React.FC<Props> = ({ text, to }) => {
  return (
    <StyledNavigationLink>
      <NavLink to={to}>{text}</NavLink>
    </StyledNavigationLink>
  );
};

export default NavigationLink;
