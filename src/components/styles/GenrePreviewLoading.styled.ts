import styled from "styled-components";

const GenrePreviewLoading = styled.div`
  display: block;
  height: 328px;
  background-color: ${({ theme }) => theme.colors.loading};
`;

export default GenrePreviewLoading;
