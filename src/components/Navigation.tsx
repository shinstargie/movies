import React, { useContext, useEffect, useState } from "react";
import StyledNavigation from "./styles/StyledNavigation.styled";
import NavigationLink from "./NavigationLink";
import { SearchContext } from "../context/SearchContext";
import { useHistory } from "react-router-dom";
import StyledNavConainer from "./styles/StyledNavContainer.styled";
import StyledInput from "./styles/StyledInput.styled";
import { GenreContext } from "./../context/GenreContext";
import Select, { ActionMeta, SingleValue } from "react-select";
import { reactSelectStyles } from "../components/styles/customStyles";
import StyledNavMenu from "./styles/StyledNavMenu.styled";
import StyledMobileMenuIcon from "./styles/StyledMobileMenuIcon.styled";
import StyledMobileHomLink from "./styles/StyledMobileHomLink.styled";

interface Props {}

const Navigation: React.FC<Props> = ({}) => {
  const tabletBreakpoint = window.innerWidth <= 768;
  const history = useHistory();
  const { searchInput, handleInputSearch } = useContext(SearchContext);
  const { genres, selectedGenre, setSelectedGenre } = useContext(GenreContext);
  const [toggleMobileMenu, setToggleMobileMenu] = useState<boolean>(false);
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
    if (!option) {
      if (tabletBreakpoint) onMobileMenuToggle();
      return history.push(`/`);
    }
    history.push(`/genre/${Number(option.value)}`);
    if (tabletBreakpoint) onMobileMenuToggle();
  }

  function handleNavLinkClick() {
    handleInputSearch("");
    setSelectedGenre(null);
  }

  function handleSingleNavLinkClick() {
    handleNavLinkClick();
    onMobileMenuToggle();
  }

  const navLinks = [
    {
      to: "/",
      text: "Home",
      onClick: handleSingleNavLinkClick,
    },
    {
      to: "/trending",
      text: "Trending",
      onClick: handleSingleNavLinkClick,
    },
    {
      to: "/top-rated",
      text: "Top Rated",
      onClick: handleSingleNavLinkClick,
    },
    {
      to: "/upcoming",
      text: "Upcoming",
      onClick: handleSingleNavLinkClick,
    },
  ];

  function onMobileMenuToggle() {
    setToggleMobileMenu(!toggleMobileMenu);

    if (toggleMobileMenu && tabletBreakpoint) {
      document.body.style.overflow = "visible";
      return;
    }

    if (!toggleMobileMenu && tabletBreakpoint) {
      document.body.style.overflow = "hidden";
      return;
    }
  }

  return (
    <>
      <StyledNavigation>
        <StyledMobileHomLink onClick={() => handleNavLinkClick()} to={"/"}>
          Home
        </StyledMobileHomLink>

        <StyledNavConainer>
          <StyledNavMenu menuOpen={toggleMobileMenu}>
            {navLinks.map((link) => (
              <NavigationLink
                key={link.to}
                to={link.to}
                text={link.text}
                onClick={link.onClick}
              />
            ))}

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
          </StyledNavMenu>

          <StyledInput
            placeholder="Find a movie..."
            value={searchInput}
            onKeyUp={(e) => handleKeyPress(e)}
            onChange={(e) => handleInputSearch(e.currentTarget.value)}
          />
        </StyledNavConainer>

        <StyledMobileMenuIcon
          onClick={() => onMobileMenuToggle()}
          src={
            toggleMobileMenu
              ? "/mobile-menu-close.png"
              : "/mobile-menu-open.png"
          }
        />
      </StyledNavigation>
    </>
  );
};

export default Navigation;
