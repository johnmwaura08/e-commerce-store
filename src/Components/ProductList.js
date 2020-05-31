import React, { Component } from "react";
// import Product from "./Product";
import Title from "./Title";
import {storeProducts} from '../../src/data';

export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };
  render() {
      console.log(this.state.products)
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="gadgets" />
            {/* //products row */}
            <div className="row"></div>
          </div>
        </div>

        {/* <Product /> */}
      </React.Fragment>
    );
  }
}
