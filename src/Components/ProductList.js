import React, { Component } from "react";
// import Product from "./Product";
import Title from "./Title";
import {storeProducts} from '../../src/data';
import{ProductConsumer} from '../context';

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
            <div className="row">
                <ProductConsumer>
                    {(value)=>{
                        return <h1>{value}</h1> // whatever value in context will be returned here
                    }}
                </ProductConsumer>
            </div>
          </div>
        </div>

        {/* <Product /> */}
      </React.Fragment>
    );
  }
}
