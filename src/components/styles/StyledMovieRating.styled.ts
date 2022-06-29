import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledMovieRating = styled.div`
  position: absolute;
  border: 2px solid rgba(255, 240, 0, 0.5);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.6);
  color: yellow;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -14px;
  right: -14px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #b20600;

  @media ${device.laptop} {
    font-size: 12px;
    top: -10px;
    right: -10px;
    height: 33px;
    width: 33px;
  }
`;

export default StyledMovieRating;
