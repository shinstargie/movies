import styled from "styled-components";
import { BACKDROP_PATH } from "../../api";

const BG_PATH = "https://image.tmdb.org/t/p/w1280";

const StyledBanner = styled.div<{ bgImg: string | undefined }>`
  border: 20px solid rgba(178, 6, 0, 0.25);
  border-right: none;
  border-left: none;
  margin-top: 130px;
  padding: 0px 50px;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(178, 6, 0, 0.7),
      rgba(178, 6, 0, 0.8)
    ),
    url(${(props) => BG_PATH + props.bgImg});
`;

export default StyledBanner;

/* background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.85)
    ),
    url(${(props) => BACKDROP_PATH + props.bgImg}); */
