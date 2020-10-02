import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";

import { ProductConsumer } from '../context';

export default class ProductList extends Component {

  render() {

    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="waviest" title="kits" />
            {/* //products row */}
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  // whatever value in context will be returned here

                  return value.products.map(product => { //mapping array to display list of products
                    return <Product key={product.id} product={product} />
                  })
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
