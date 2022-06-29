import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import GlobalStyles from "./components/styles/_global";
import Navigation from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import GenreBased from "./pages/GenreBased";
import { ThemeProvider } from "styled-components";
import Search from "./pages/Search";
import { SearchContextProvider } from "./context/SearchContext";
import TopRated from "./pages/TopRated";
import Upcoming from "./pages/Upcoming";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

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
          <ScrollToTop />
          <SearchContextProvider>
            <Navigation />
            <Route path="/" exact component={Home} />
            <Route path="/trending" component={Trending} />
            <Route path="/top-rated" component={TopRated} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/genre/:id" component={GenreBased} />
            <Route path="/search" component={Search} />
          </SearchContextProvider>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
