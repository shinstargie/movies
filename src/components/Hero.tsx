import React, { useState, useContext } from "react";
import HeroSection from "./HeroSection";
import HeroContainer from "./HeroContainer";
import HeroContent from "./HeroContent";
import StyledHeroTitle from "./styles/StyledHeroTitle.styled";
import StyledButton from "./styles/StyledButton";
import { Genre, Movie } from "./_types";
import StyledHeroDescription from "./styles/StyledHeroDescription.styled";
import StyledHeroLoader from "./styles/StyledHeroLoader.styled";
import CustomModal from "./CustomModal";
import { GenreContext } from "./../context/GenreContext";
import toast from "react-hot-toast";
import { fetchTrailer } from "../api";

interface Props {
  data: Movie | null | undefined;
  loading: boolean;
}

const Hero: React.FC<Props> = ({ data, loading }) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [currentGenres, setCurrentGenres] = useState<Genre[] | null>(null);
  const [trailerLoading, setTrailerLoading] = useState<boolean>(true);
  const { genres } = useContext(GenreContext);

  function matchGenres(movie: Movie) {
    if (genres) {
      const matchedGenres = genres.filter(
        (obj) => movie.genre_ids.indexOf(obj.id) !== -1
      );
      setCurrentGenres(matchedGenres);
    }
  }

  async function openModal(movie: Movie) {
    setTrailerLoading(true);
    const trailer = await fetchTrailer(movie.id);
    if (!trailer) return toast.error("Trailer unavailable");

    movie.trailerKey = trailer.key;
    matchGenres(movie);
    setToggleModal(!toggleModal);

    const timeout: ReturnType<typeof setTimeout> = setTimeout(() => {
      setTrailerLoading(false);
    }, 1200);
  }

  return (
    <>
      {loading && <StyledHeroLoader />}

      <CustomModal
        loading={trailerLoading}
        toggleModal={toggleModal}
        closeModal={() => setToggleModal(!toggleModal)}
        movie={data}
        matchedGenres={currentGenres}
      />

      {!loading && data && (
        <HeroSection bgImg={data?.backdrop_path}>
          <HeroContainer>
            <HeroContent>
              <StyledHeroTitle>{data?.title}</StyledHeroTitle>
              <StyledHeroDescription>{data?.overview}</StyledHeroDescription>
              <StyledButton primary onClick={() => openModal(data)}>
                Play Trailer
              </StyledButton>
            </HeroContent>
          </HeroContainer>
        </HeroSection>
      )}
    </>
  );
};

export default Hero;

/*
const [currentMovie, setCurrentMovie] = useState<Movie | null>(null); 
setCurrentMovie(movie);
*/

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
