import { useEffect, useState } from "react";
import axios from "axios";
import StyledContainer from "./styles/StyledContainer.styled";
import MovieContainer from "./styles/MovieContainer.styled";
import MovieImage from "./styles/MovieImage.styled";
import Section from "./styles/Section.styled";
import "./App.css";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

interface movieObject {
  title: string;
  id: number;
  poster_path: string;
}

function App() {
  const [data, setData] = useState<movieObject[] | null>(null);
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w300";
  const [sort, setSort] = useState<string>();
  const [page, setPage] = useState<number>();
  // const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getData();
  }, [sort, page]);

  async function getData() {
    const { data } = await api.get("discover/movie", {
      params: {
        language: "en-US",
        sort_by: sort,
        include_adult: false,
        page,
      },
    });

    setData(data.results);
  }

  function setSortyBy(val: any): void {
    setSort(val.value);
  }

  return (
    <div className="App">
      <Section>
        <StyledContainer>
          <div className="controls">
            <select
              onChange={(event: React.ChangeEvent<Element>) =>
                setSortyBy(event.target)
              }
              defaultValue={sort}
            >
              <option value="">Select an option</option>
              <option value="release_date.asc">Oldest</option>
              <option value="release_date.desc">Latest</option>
            </select>

            <select
              onChange={(event) => setPage(Number(event.target.value))}
              defaultValue={page}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
            </select>
          </div>

          <MovieContainer>
            {data?.map((movie) => (
              <MovieImage
                key={movie.id}
                src={IMAGE_PATH + `${movie.poster_path}`}
                alt={movie.title}
              />
            ))}
          </MovieContainer>
        </StyledContainer>
      </Section>
    </div>
  );
}

export default App;

{
  /* <img
                  className="movie-image"
                  src={IMAGE_PATH + `${movie.poster_path}`}
                  src={BACKDROP_PATH + `${movie.backdrop_path}`}
                  alt={movie.title}
                /> */
}
