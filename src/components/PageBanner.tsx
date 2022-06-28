import React from "react";
import StyledBannerContainer from "./styles/StyledBannerContainer.styled";
import StyledBannerSection from "./styles/StyledBannerSection";
import StyledPageTitle from "./styles/StyledPageTitle.styled";
import { Movie } from "./_types";

interface Props {
  title: string;
  currentPage: number;
  currentMovies: Movie[] | null;
}

const PageBanner: React.FC<Props> = ({ title, currentPage, currentMovies }) => {
  const randomBg: number | null =
    currentMovies && Number((Math.random() * currentMovies?.length).toFixed());

  return (
    <>
      {currentPage === 1 && currentMovies && (
        <StyledBannerSection
          bgImg={currentMovies[randomBg ? randomBg : 0].backdrop_path}
        >
          <StyledBannerContainer>
            <StyledPageTitle>{title}</StyledPageTitle>
          </StyledBannerContainer>
        </StyledBannerSection>
      )}
    </>
  );
};

export default PageBanner;
