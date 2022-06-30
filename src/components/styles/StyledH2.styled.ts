import styled from "styled-components";
import { device } from "./_breakpoints";

const StyledH2Title = styled.h2<{ extraMargin?: string | null }>`
  display: inline-block;
  margin-bottom: ${({ extraMargin }) => (!extraMargin ? "0px" : extraMargin)};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;

  @media ${device.laptop} {
    font-size: 20px;
  }
`;

export default StyledH2Title;
