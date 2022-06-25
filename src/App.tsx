import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Paginate from "./pages/Paginate";
import GlobalStyles from "./components/styles/_global";
import "./App.css";
import Navigation from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import GenreBased from "./pages/GenreBased";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    colors: {
      red: "#b20600",
      black: "#000000",
      loading: "rgb(255, 255, 255, 0.15)",
    },
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Toaster position="top-right" />
        <Router>
          <Navigation />
          <Route path="/" exact component={Home} />
          <Route path="/popular" component={Popular} />
          <Route path="/paginate" component={Paginate} />
          <Route path="/genre/:id" component={GenreBased} />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
