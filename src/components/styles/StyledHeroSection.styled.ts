import styled from "styled-components";
import { BACKDROP_PATH } from "../../api";

const StyledHeroSection = styled.div<{ bgImg: string | undefined }>`
  display: flex;
  padding: 60px 25px;
  justify-content: center;
  align-items: end;
  height: 900px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75)
    ),
    url(${(props) => BACKDROP_PATH + props.bgImg});
`;

export default StyledHeroSection;
