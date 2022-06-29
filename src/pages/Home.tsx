import React, { useEffect, useState } from "react";
import Section from "./../components/Section";
import { fetchMoviesWithGenre } from "../api";
import { Movie } from "../components/_types";
import GenrePreviewContainer from "./../components/GenrePreviewContainer";
import GenrePreviewLoading from "../components/styles/GenrePreviewLoading.styled";
import MovieContainer from "./../components/styles/MovieContainer.styled";
import Hero from "../components/Hero";

interface Props {}

const Home: React.FC<Props> = ({}) => {
  const [action, setAction] = useState<Movie[] | null>(null);
  const [adventure, setAdventure] = useState<Movie[] | null>(null);
  const [animation, setAnimation] = useState<Movie[] | null>(null);
  const [comedy, setComedy] = useState<Movie[] | null>(null);
  const [crime, setCrime] = useState<Movie[] | null>(null);
  const [docu, setDocu] = useState<Movie[] | null>(null);
  const [drama, setDrama] = useState<Movie[] | null>(null);
  const [family, setFamily] = useState<Movie[] | null>(null);
  const [fantasy, setFantasy] = useState<Movie[] | null>(null);
  const [history, setHistory] = useState<Movie[] | null>(null);
  const [horror, setHorror] = useState<Movie[] | null>(null);

  const [loading, setLoading] = useState<boolean>(true);
  /* const loadingItems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]; */
  const loadingItems = Array.from({ length: 20 }, (_, i) => i + 1);
  const [featured, setFeatured] = useState<Movie | null | undefined>(null);

  useEffect(() => {
    getAction();
    getAdventure();
    getAnimation();
    getComedy();
    getCrime();
    getDocu();
    getDrama();
    getFamily();
    getFantasy();
    getHistory();
    getHorror();
  }, []);

  function chooseFeaturedMovie(movie: Movie[]) {
    const sonic = movie.find((movie: Movie) =>
      movie.title.toLowerCase().includes("sonic")
    );
    if (!sonic) return setFeatured(movie.shift());
    setFeatured(sonic);
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
  }

  async function getCrime() {
    const data = await fetchMoviesWithGenre(80, "12,28,16,35");
    setCrime(data.results);
  }

  async function getDocu() {
    const data = await fetchMoviesWithGenre(99, "12,28,16,35,80");
    setDocu(data.results);
  }

  async function getDrama() {
    const data = await fetchMoviesWithGenre(18, "12,28,16,35,80,99");
    setDrama(data.results);
  }

  async function getFamily() {
    const data = await fetchMoviesWithGenre(10751, "12,28,16,35,80,99,18");
    setFamily(data.results);
  }

  async function getFantasy() {
    const data = await fetchMoviesWithGenre(14, "12,28,16,35,80,99,18,10751");
    setFantasy(data.results);
  }

  async function getHistory() {
    const data = await fetchMoviesWithGenre(
      36,
      "12,28,16,35,80,99,18,10751,14"
    );
    setHistory(data.results);
    setLoading(false);
  }

  async function getHorror() {
    const data = await fetchMoviesWithGenre(
      27,
      "12,28,16,35,80,99,18,10751,14,36"
    );
    setHorror(data.results);
    setLoading(false);
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
          <GenrePreviewContainer data={docu} title="Documentary" id={99} />
          <GenrePreviewContainer data={drama} title="Drama" id={18} />
          <GenrePreviewContainer data={family} title="Family" id={10751} />
          <GenrePreviewContainer data={fantasy} title="Fantasy" id={14} />
          <GenrePreviewContainer data={history} title="History" id={36} />
          <GenrePreviewContainer data={horror} title="Horror" id={27} />
        </Section>
      )}
    </>
  );
};

export default Home;
