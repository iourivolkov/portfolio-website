import "./App.css";
import Navigation from "../src/components/Navigation";
import LandingPage from "../src/components/LandingPage";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Photos from "./components/Photos";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/work">
            <Projects />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
