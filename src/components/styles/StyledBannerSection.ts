import styled from "styled-components";
import { BACKDROP_PATH } from "../../api";

const BG_PATH = "https://image.tmdb.org/t/p/w1280";

const StyledBannerSection = styled.div<{ bgImg: string | undefined }>`
  /* border: 20px solid rgba(255, 255, 255, 0.1); */
  border-right: none;
  border-left: none;
  margin-top: 130px;
  padding: 0px 50px;
  height: 250px;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.7)
    ),
    url(${(props) => BG_PATH + props.bgImg});
`;

export default StyledBannerSection;

// rgba(0, 0, 0, 0.4),

/* background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.85)
    ),
    url(${(props) => BACKDROP_PATH + props.bgImg}); */
