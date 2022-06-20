import React from "react";
import TrailerTitle from "./TrailerTitle";
import Trailer from "./Trailer";
import TrailerDescription from "./TrailerDescription";
import { Movie, Genres } from "./../pages/Home";
import TrailerLoading from "./styles/TrailerLoading.styled";

interface Props {
  movie: Movie;
  loading: boolean;
  trailerGenres: Genres[] | null;
}

const TrailerModal: React.FC<Props> = ({ movie, loading, trailerGenres }) => {
  return (
    <>
      <TrailerTitle text={movie.title} />
      <div style={{ position: "relative" }}>
        {loading && (
          <TrailerLoading>
            <img style={{ width: "150px" }} src={"ytb-loading-state.gif"} />
          </TrailerLoading>
        )}
        <Trailer trailer={movie} />
      </div>
      <div>
        <span>Relased: {movie.release_date}</span>
        {trailerGenres?.map((genre) => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </div>

      <TrailerDescription text={movie.overview} />
    </>
  );
};

export default TrailerModal;
