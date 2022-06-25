import { NavLink } from "react-router-dom";
import React from "react";
import StyledNavigationLink from "./styles/StyledNavigationLink";

interface Props {
  text: string;
  to: string;
  onClick?: () => void;
}

const NavigationLink: React.FC<Props> = ({ text, to, onClick }) => {
  return (
    <StyledNavigationLink>
      <NavLink
        exact
        activeClassName="active-nav-link"
        to={to}
        onClick={onClick}
      >
        {text}
      </NavLink>
    </StyledNavigationLink>
  );
};

export default NavigationLink;
