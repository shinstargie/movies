import React from "react";
import HeroSection from "./HeroSection";
import HeroContainer from "./HeroContainer";
import HeroContent from "./HeroContent";
import StyledHeroTitle from "./styles/StyledHeroTitle.styled";
import StyledButton from "./styles/StyledButton";

import { Movie } from "./_types";
import StyledHeroDescription from "./styles/StyledHeroDescription.styled";
import StyledHeroLoader from "./styles/StyledHeroLoader.styled";

interface Props {
  data: Movie | null | undefined;
  loading: boolean;
}

const Hero: React.FC<Props> = ({ data, loading }) => {
  return (
    <>
      {loading && <StyledHeroLoader />}
      {!loading && (
        <HeroSection bgImg={data?.backdrop_path}>
          <HeroContainer>
            <HeroContent>
              <StyledHeroTitle>{data?.title}</StyledHeroTitle>
              <StyledHeroDescription>{data?.overview}</StyledHeroDescription>
              <StyledButton primary>Play Trailer</StyledButton>
            </HeroContent>
          </HeroContainer>
        </HeroSection>
      )}
    </>
  );
};

export default Hero;

{
  /* <button
                style={{
                  padding: "15px 20px",
                  fontSize: "20px",
                  cursor: "pointer",
                  backgroundColor: "#b20600",
                  color: "white",
                  borderColor: "white",
                }}
              >
                Play trailer
              </button> */
}

{
  /* <div
              style={{
                marginRight: "auto",
                maxWidth: "750px",
              }}
            ></div> */
}

{
  /* <p
  style={{
    fontSize: "20px",
    lineHeight: "1.5",
  }}
>
  {data?.overview}
</p>; */
}

{
  /* <h2
                style={{
                  fontSize: "60px",
                  fontWeight: "800",
                  lineHeight: "1.15",
                }}
              >
                {data?.title}
              </h2> */
}
