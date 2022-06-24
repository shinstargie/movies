import React, { useEffect, useState } from "react";
import Section from "./../components/Section";
import { fetchMoviesWithGenre } from "../api";
import { Movie } from "../components/_types";
import GenrePreviewContainer from "./../components/GenrePreviewContainer";
import GenrePreviewLoading from "../components/styles/GenrePreviewLoading.styled";
import MovieContainer from "./../components/styles/MovieContainer.styled";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  const [actionMovies, setActionMovies] = useState<Movie[] | null>(null);
  const [adventureMovies, setAdventureMovies] = useState<Movie[] | null>(null);
  const [animationMovies, setAnimationMovies] = useState<Movie[] | null>(null);
  const [comedyMovies, setComedyMovies] = useState<Movie[] | null>(null);
  const [crimeMovies, setCrimeMovies] = useState<Movie[] | null>(null);
  const [documentaryMovies, setDocumentaryMovies] = useState<Movie[] | null>(
    null
  );
  const [dramaMovies, setDramaMovies] = useState<Movie[] | null>(null);
  const [familyMovies, setFamilyMovies] = useState<Movie[] | null>(null);
  const [fantasyMovies, setFantasyMovies] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const loadingItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  useEffect(() => {
    getActionMovies();
    getAdventureMovies();
    getAnimationMovies();
    getComedyMovies();
    getCrimeMovies();
    getDocumentaryMovies();
    getDramaMovies();
    getFamilyMovies();
    getFantasyMovies();
  }, []);

  async function getActionMovies() {
    /* const timeout: ReturnType<typeof setTimeout> = setTimeout(async () => {
      
      setLoading(false);
    }, 50000); */

    const data = await fetchMoviesWithGenre(28, 16);
    setActionMovies(data.results);
  }

  async function getAdventureMovies() {
    const data = await fetchMoviesWithGenre(12, 28);
    setAdventureMovies(data.results);
  }

  async function getAnimationMovies() {
    const data = await fetchMoviesWithGenre(16, "12,28");
    setAnimationMovies(data.results);
  }

  async function getComedyMovies() {
    const data = await fetchMoviesWithGenre(35, "12,28,16");
    setComedyMovies(data.results);
  }

  async function getCrimeMovies() {
    const data = await fetchMoviesWithGenre(80, "12,28,16,35");
    setCrimeMovies(data.results);
  }

  async function getDocumentaryMovies() {
    const data = await fetchMoviesWithGenre(99, "12,28,16,35,80");
    setDocumentaryMovies(data.results);
  }

  async function getDramaMovies() {
    const data = await fetchMoviesWithGenre(18, "12,28,16,35,80,99");
    setDramaMovies(data.results);
  }

  async function getFamilyMovies() {
    const data = await fetchMoviesWithGenre(10751, "12,28,16,35,80,99,18");
    setFamilyMovies(data.results);
  }

  async function getFantasyMovies() {
    const data = await fetchMoviesWithGenre(14, "12,28,16,35,80,99,18,10751");
    setFantasyMovies(data.results);
    setLoading(false);
  }

  return (
    <>
      {loading && (
        <Section>
          <MovieContainer>
            {loadingItems.map((item, idx) => (
              <GenrePreviewLoading key={idx} />
            ))}
          </MovieContainer>
        </Section>
      )}

      {!loading && (
        <Section>
          <GenrePreviewContainer
            data={actionMovies}
            title="Action"
            id={28}
            autoplay={true}
          />
          <GenrePreviewContainer
            data={adventureMovies}
            title="Adventure"
            id={12}
          />
          <GenrePreviewContainer
            data={animationMovies}
            title="Animation"
            id={16}
          />
          <GenrePreviewContainer data={comedyMovies} title="Comedy" id={35} />
          <GenrePreviewContainer data={crimeMovies} title="Crime" id={80} />
          <GenrePreviewContainer
            data={documentaryMovies}
            title="Documentary"
            id={99}
          />
          <GenrePreviewContainer data={dramaMovies} title="Drama" id={18} />
          <GenrePreviewContainer
            data={familyMovies}
            title="Family"
            id={10751}
          />
          <GenrePreviewContainer data={fantasyMovies} title="Fantasy" id={14} />
        </Section>
      )}
    </>
  );
};

export default Home;
