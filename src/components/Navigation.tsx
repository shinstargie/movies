import React, { useContext } from "react";
import StyledNavigation from "./styles/StyledNavigation.styled";
import NavigationLink from "./NavigationLink";
import { SearchContext } from "../context/SearchContext";
import { useHistory } from "react-router-dom";
import StyledNavConainer from "./styles/StyledNavContainer.styled";

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
  const { searchInput, handleInputSearch } = useContext(SearchContext);
  const history = useHistory();

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): any {
    const term = event.currentTarget.value;
    if (term.length === 0) return history.push("/");
  }

  return (
    <>
      <StyledNavigation>
        <StyledNavConainer>
          <div>
            <NavigationLink
              onClick={() => handleInputSearch("")}
              to="/"
              text="Home"
            />
            <NavigationLink
              to="/popular"
              text="Popular"
              onClick={() => handleInputSearch("")}
            />
          </div>
          <input
            style={{
              backgroundColor: "black",
              color: "white",
              borderStyle: "solid",
              padding: "10px",
              height: "45px",
              width: "250px",
              fontSize: "18px",
            }}
            placeholder="Search for a movie..."
            value={searchInput}
            onKeyUp={(e) => handleKeyPress(e)}
            onChange={(e) => handleInputSearch(e.currentTarget.value)}
          />
        </StyledNavConainer>
      </StyledNavigation>
    </>
  );
};

export default Navigation;
