import styled from "styled-components";

const StyledNavigation = styled.nav`
  display: flex;
  padding: 25px 25px;
  position: absolute;
  width: 100%;
  max-width: 100vw;
  top: 0;
  z-index: 2;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.8),
    rgba(0, 0, 0, 1)
  );
`;

export default StyledNavigation;
