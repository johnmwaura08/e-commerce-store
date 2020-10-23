import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Cart,
  Default,
  Details,
  Navbar,
  LandingPage,
  ProductList,
  Modal
} from "./Components";
import ContactForm from "./Components/Contact/ContactForm";
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/details" component={Details} />
            <Route path="/cart" component={Cart} />
            <Route path="/products" component={ProductList} />
            <Route path="/contact" component={ContactForm} />
            <Route component={Default} />
          </Switch>

          <Modal />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
