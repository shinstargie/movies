import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Mulish:wght@500;600;700;800;900&display=swap");

* {
  box-sizing: border-box;
}

a:hover {
  color: yellow;
}

.active-nav-link {
  color: yellow;
}

body {
  margin: 0;
  background-color: black;
  color: white;
  font-family: "Mulish", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h2 {
  margin: 0;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: white;
}
`;

export default GlobalStyles;
