import React from "react";
import TrailerTitle from "./TrailerTitle";
import Trailer from "./Trailer";
import TrailerDescription from "./TrailerDescription";
import { Genre, Movie } from "./_types";
import TrailerLoading from "./styles/TrailerLoading.styled";
import Section from "./Section";
import Container from "./Container";

interface Props {
  movie: Movie;
  loading: boolean;
  trailerGenres: Genre[] | null;
}

const TrailerModal: React.FC<Props> = ({ movie, loading, trailerGenres }) => {
  return (
    <Section>
      <Container>
        <TrailerTitle text={movie.title} />

        <div style={{ position: "relative" }}>
          {loading && (
            <TrailerLoading>
              <img style={{ width: "150px" }} src={"ytb-loading-state.gif"} />
            </TrailerLoading>
          )}

          <Trailer trailer={movie} />
        </div>

        <div style={{ opacity: "100%" }}>
          <span style={{ marginRight: "20px" }}>
            Relased: {movie.release_date}
          </span>
          Genres:{" "}
          {trailerGenres?.map((genre) => (
            <span
              style={{
                display: "inline-block",
                fontSize: "14px",
                margin: "0 5px",
                padding: "6px 10px",
                backgroundColor: "#B20600",
                color: "white",
                borderRadius: "5px",
              }}
              key={genre.id}
            >
              {genre.name}
            </span>
          ))}
        </div>

        <TrailerDescription text={movie.overview} />
      </Container>
    </Section>
  );
};

export default TrailerModal;
