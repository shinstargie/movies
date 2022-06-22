import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@500;600;700;800;900&display=swap");

body {
  margin: 0;
  background-color: black;
  color: white;
  font-family: "Mulish", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: white;
}
`;

export default GlobalStyles;
