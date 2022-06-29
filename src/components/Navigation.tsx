import React, { useContext, useEffect, useState } from "react";
import StyledNavigation from "./styles/StyledNavigation.styled";
import NavigationLink from "./NavigationLink";
import { SearchContext } from "../context/SearchContext";
import { useHistory } from "react-router-dom";
import StyledNavConainer from "./styles/StyledNavContainer.styled";
import StyledInput from "./styles/StyledInput.styled";
import "react-dropdown/style.css";
import { GenreContext } from "./../context/GenreContext";
import Select, { ActionMeta, SingleValue } from "react-select";
import { reactSelectStyles } from "../components/styles/customStyles";

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
  const history = useHistory();
  const { searchInput, handleInputSearch } = useContext(SearchContext);
  const { genres, selectedGenre, setSelectedGenre } = useContext(GenreContext);
  const [genreOptions, setGenreOptions] = useState<
    { label: string; value: string }[] | undefined
  >();

  useEffect(() => {
    const options = genres?.map((genre) => ({
      value: genre.id.toString(),
      label: genre.name,
    }));
    setGenreOptions(options);
  }, [genres]);

  function handleKeyPress(event: React.KeyboardEvent<HTMLInputElement>): any {
    const term = event.currentTarget.value;
    if (term.length > 0) setSelectedGenre(null);
    if (term.length === 0) return history.push("/");
  }

  interface GenreSelectOption {
    value: string;
    label: string;
  }

  function handleGenreChange(
    option: SingleValue<GenreSelectOption> | null,
    actionMeta: ActionMeta<GenreSelectOption>
  ) {
    setSelectedGenre(option);
    if (!option) return history.push(`/`);
    history.push(`/genre/${Number(option.value)}`);
  }

  function handleNavLinkClick() {
    handleInputSearch("");
    setSelectedGenre(null);
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
            <NavigationLink onClick={handleNavLinkClick} to="/" text="Home" />
            <NavigationLink
              to="/trending"
              text="Trending"
              onClick={handleNavLinkClick}
            />
            <NavigationLink
              to="/top-rated"
              text="Top Rated"
              onClick={handleNavLinkClick}
            />
            <NavigationLink
              to="/upcoming"
              text="Upcoming"
              onClick={handleNavLinkClick}
            />
            {genreOptions && (
              <Select
                value={selectedGenre}
                styles={reactSelectStyles}
                placeholder="Genre"
                options={genreOptions}
                onChange={handleGenreChange}
                isClearable={true}
                isSearchable={false}
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
