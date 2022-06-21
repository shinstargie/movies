import { BrowserRouter as Router, Route } from "react-router-dom";
import Popular from "./pages/Popular";
import GlobalStyles from "./components/styles/_global";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route path="/" exact component={Popular} />
      </Router>
    </>
  );
}

export default App;
