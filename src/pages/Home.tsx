import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Section from "./../components/Section";
import SwipeSlider from "./../components/SwipeSlider";
import { fetchMoviesWithGenre } from "../api";
import { Movie } from "../components/_types";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  const [actionMovies, setActionMovies] = useState<Movie[] | null>(null);
  const [adventureMovies, setAdventureMovies] = useState<Movie[] | null>(null);
  const [animationMovies, setAnimationMovies] = useState<Movie[] | null>(null);
  const [comedyMovies, setComedyMovies] = useState<Movie[] | null>(null);
  const [crimeMovies, setCrimeMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    getActionMovies();
    getAdventureMovies();
    getAnimationMovies();
    getComedyMovies();
    getCrimeMovies();
  }, []);

  async function getActionMovies() {
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

  return (
    <>
      <Section>
        <Container>
          <h2>Action</h2>
          <SwipeSlider data={actionMovies} />
        </Container>
        <Container>
          <h2>Adventure</h2>
          <SwipeSlider data={adventureMovies} />
        </Container>
        <Container>
          <h2>Animation</h2>
          <SwipeSlider data={animationMovies} />
        </Container>
        <Container>
          <h2>Comedy</h2>
          <SwipeSlider data={comedyMovies} />
        </Container>
        <Container>
          <h2>Crime</h2>
          <SwipeSlider data={crimeMovies} />
        </Container>
      </Section>
    </>
  );
};

export default Home;
