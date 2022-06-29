import styled from "styled-components";

const StyledContainer = styled.div<{ med?: boolean | undefined }>`
  max-width: 1440px;
  max-width: ${({ med }) => (med ? "1340px" : "1440px")};
  margin: 0 auto;
  padding: 15px 0px;
`;

export default StyledContainer;
