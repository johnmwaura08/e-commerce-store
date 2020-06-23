import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//provider
//consumer - uses information provided by provider

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
  };
  componentDidMount(){
      this.setProducts();
  }
  setProducts = () => {
      let tempProducts = [];
      storeProducts.forEach(item => {
          const singleItem = {...item};
          tempProducts=[...tempProducts,singleItem];

      })

      this.setState(()=> {
          return{products:tempProducts}
      })
  }
   handleDetail = () => {
    console.log("hello from detail");
  };
  addToCart = (id) => {
    console.log("add to cart");
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          //value can be an object with methods and we can access it on productlist
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
