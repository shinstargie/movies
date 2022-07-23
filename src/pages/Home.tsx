import React, { useEffect, useState } from "react";
import Section from "./../components/Section";
import { fetchMoviesWithGenre } from "../api";
import { Movie } from "../components/_types";
import Hero from "../components/Hero";
import GenrePreviewContainer from "./../components/GenrePreviewContainer";
import GenrePreviewLoading from "../components/styles/GenrePreviewLoading.styled";
import MovieContainer from "./../components/styles/MovieContainer.styled";

const Home: React.FC = () => {
  const [action, setAction] = useState<Movie[] | null>(null);
  const [adventure, setAdventure] = useState<Movie[] | null>(null);
  const [animation, setAnimation] = useState<Movie[] | null>(null);
  const [comedy, setComedy] = useState<Movie[] | null>(null);
  const [crime, setCrime] = useState<Movie[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  const loadingItems = Array.from({ length: 20 }, (_, i) => i + 1);
  const [featured, setFeatured] = useState<Movie | null | undefined>(null);

  useEffect(() => {
    const timeout1: ReturnType<typeof setTimeout> = setTimeout(() => {
      getAction();
    }, 0);

    const timeout2: ReturnType<typeof setTimeout> = setTimeout(() => {
      getAdventure();
    }, 1000);

    const timeout3: ReturnType<typeof setTimeout> = setTimeout(() => {
      getAnimation();
    }, 2000);

    const timeout4: ReturnType<typeof setTimeout> = setTimeout(() => {
      getComedy();
    }, 3000);

    const timeout5: ReturnType<typeof setTimeout> = setTimeout(() => {
      getCrime();
    }, 4000);
  }, []);

  function chooseFeaturedMovie(movie: Movie[]) {
    const randomMovie: number = Number(
      (Math.random() * movie.length).toFixed()
    );
    setFeatured(movie[randomMovie]);
  }

  async function getAction() {
    const data = await fetchMoviesWithGenre(28, 16);
    chooseFeaturedMovie(data.results);
    setAction(data.results);
  }

  async function getAdventure() {
    const data = await fetchMoviesWithGenre(12, 28);
    setAdventure(data.results);
  }

  async function getAnimation() {
    const data = await fetchMoviesWithGenre(16, "12,28");
    setAnimation(data.results);
  }

  async function getComedy() {
    const data = await fetchMoviesWithGenre(35, "12,28,16");
    setComedy(data.results);
    setLoading(false);
  }

  async function getCrime() {
    const data = await fetchMoviesWithGenre(80, "12,28,16,35");
    setCrime(data.results);
  }

  return (
    <>
      <Hero data={featured} loading={loading} />

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
            data={action}
            title="Action"
            id={28}
            autoplay={true}
          />
          <GenrePreviewContainer data={adventure} title="Adventure" id={12} />
          <GenrePreviewContainer data={animation} title="Animation" id={16} />
          <GenrePreviewContainer data={comedy} title="Comedy" id={35} />
          <GenrePreviewContainer data={crime} title="Crime" id={80} />
        </Section>
      )}
    </>
  );
};

export default Home;
