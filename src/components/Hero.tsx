import React, { useState } from "react";
import HeroSection from "./HeroSection";
import HeroContainer from "./HeroContainer";
import HeroContent from "./HeroContent";
import StyledHeroTitle from "./styles/StyledHeroTitle.styled";
import StyledButton from "./styles/StyledButton";
import { Movie } from "./_types";
import StyledHeroDescription from "./styles/StyledHeroDescription.styled";
import StyledHeroLoader from "./styles/StyledHeroLoader.styled";
import CustomModal from "./CustomModal";
import toast from "react-hot-toast";
import { fetchTrailer } from "../api";
import { useHistory } from "react-router-dom";
import TrailerModal from "./TrailerModal";

interface Props {
  data: Movie | null | undefined;
  loading: boolean;
}

const Hero: React.FC<Props> = ({ data, loading }) => {
  const history = useHistory();
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  async function getTrailer(movie: Movie) {
    const trailer = await fetchTrailer(movie.id);
    if (!trailer) return toast.error("Trailer unavailable");
    movie.trailerKey = trailer.key;
    setToggleModal(!toggleModal);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    document.body.style.overflow = "visible";
    setToggleModal(!toggleModal);
  }

  return (
    <>
      {loading && <StyledHeroLoader />}

      <CustomModal
        toggleModal={toggleModal}
        closeModal={closeModal}
        content={<TrailerModal movie={data} closeModal={closeModal} />}
      />

      {!loading && data && (
        <HeroSection bgImg={data?.backdrop_path}>
          <HeroContainer>
            <HeroContent>
              <StyledHeroTitle>{data?.title}</StyledHeroTitle>
              <StyledHeroDescription>{data?.overview}</StyledHeroDescription>
              <StyledButton primary onClick={() => getTrailer(data)}>
                Play Trailer
              </StyledButton>
              <StyledButton onClick={() => history.push("/genre/28")}>
                Action Movies
              </StyledButton>
            </HeroContent>
          </HeroContainer>
        </HeroSection>
      )}
    </>
  );
};

export default Hero;

/* closeModal={() => setToggleModal(!toggleModal)} */
