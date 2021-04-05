import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Advertise from "./components/Advertise";
import Search from "./components/Search";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Footer from "./components/Footer";
import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/advertise">
          <Advertise />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route path="/*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
