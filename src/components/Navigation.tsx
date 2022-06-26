import React, { useContext, useEffect, useState } from "react";
import StyledNavigation from "./styles/StyledNavigation.styled";
import NavigationLink from "./NavigationLink";
import { SearchContext } from "../context/SearchContext";
import { useHistory } from "react-router-dom";
import StyledNavConainer from "./styles/StyledNavContainer.styled";
import StyledInput from "./styles/StyledInput.styled";
import Dropdown, { Option } from "react-dropdown";
import "react-dropdown/style.css";
import { GenreContext } from "./../context/GenreContext";

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
  const { searchInput, handleInputSearch } = useContext(SearchContext);
  const [genreOptions, setGenreOptions] = useState<Option[] | undefined>(
    undefined
  );
  const { genres } = useContext(GenreContext);
  const history = useHistory();

  useEffect(() => {
    const options = genres?.map((genre) => ({
      value: genre.id.toString(),
      label: genre.name,
    }));
    setGenreOptions(options);
  }, [genres]);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): any {
    const term = event.currentTarget.value;
    if (term.length === 0) return history.push("/");
  }

  function routeToGenre(option: Option) {
    history.push(`/genre/${Number(option.value)}`);
  }

  return (
    <>
      <StyledNavigation>
        <StyledNavConainer>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
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
            {genreOptions && (
              <Dropdown
                options={genreOptions}
                placeholder="Genres"
                onChange={routeToGenre}
              />
            )}
          </div>
          <StyledInput
            placeholder="Find a movie..."
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
