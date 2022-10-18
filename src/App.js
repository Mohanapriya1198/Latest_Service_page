import React from "react";
import "./App.css";

import Cleaningservices from "./components/Cleaningservices";
import About from "./components/About";
import Contact from "./components/Contact";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Cleaningservices} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
