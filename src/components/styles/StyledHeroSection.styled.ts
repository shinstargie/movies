import styled from "styled-components";
import { BACKDROP_PATH } from "../../api";
import { device } from "./_breakpoints";

const StyledHeroSection = styled.div<{ bgImg: string | undefined }>`
  display: flex;
  padding: 50px 25px 0px;
  justify-content: center;
  align-items: end;
  height: 900px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.98)
    ),
    url(${(props) => BACKDROP_PATH + props.bgImg});

  @media ${device.laptop} {
    height: 700px;
    padding: 50px 25px 0px;
  }
`;

export default StyledHeroSection;
