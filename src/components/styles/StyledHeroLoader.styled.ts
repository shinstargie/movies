import styled from "styled-components";

const StyledHeroLoader = styled.div`
  height: 850px;
  margin: 50px;
  background-color: ${({ theme }) => theme.colors.loading};
`;

export default StyledHeroLoader;
