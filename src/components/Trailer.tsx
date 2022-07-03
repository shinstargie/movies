import React from "react";
import Youtube from "react-youtube";
import { Movie } from "./_types";

interface Props {
  trailer: Movie | null | undefined;
}

const Trailer: React.FC<Props> = ({ trailer }) => {
  return (
    <>
      {trailer && (
        <Youtube
          videoId={trailer?.trailerKey}
          iframeClassName="youtube-player"
          opts={{
            width: "100%",
            height: "650px",
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              controls: 1,
              fs: 1,
              rel: 0,
              origin: window.location.href,
            },
          }}
        />
      )}
    </>
  );
};

export default Trailer;
