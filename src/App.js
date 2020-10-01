import React from "react";
import { Switch, Route } from "react-router-dom";
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

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/products" component={ProductList} />
          <Route component={Default} />
        </Switch>

        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
