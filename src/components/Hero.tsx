import React from "react";
import { BACKDROP_PATH } from "../api";
import { Movie } from "./_types";

interface Props {
  data: Movie | null | undefined;
  loading: boolean;
}

const Hero: React.FC<Props> = ({ data, loading }) => {
  return (
    <>
      {!loading && (
        <div
          style={{
            display: "flex",
            padding: "60px 0px",
            justifyContent: "center",
            alignItems: "end",
            height: "850px",
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url(${
              BACKDROP_PATH + data?.backdrop_path
            }`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "1440px",
            }}
          >
            <div
              style={{
                marginRight: "auto",
                maxWidth: "750px",
              }}
            >
              <h2
                style={{
                  fontSize: "60px",
                  fontWeight: "800",
                  lineHeight: "1.15",
                }}
              >
                {data?.title}
              </h2>
              <p
                style={{
                  fontSize: "20px",
                  lineHeight: "1.5",
                }}
              >
                {data?.overview}
              </p>
              <button
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
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
