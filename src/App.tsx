import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Paginate from "./pages/Paginate";
import GlobalStyles from "./components/styles/_global";
import "./App.css";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <GlobalStyles />

      <Router>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/popular" component={Popular} />
        <Route path="/paginate" component={Paginate} />
      </Router>
    </>
  );
}

export default App;
