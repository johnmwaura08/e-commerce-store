import React, { Component } from 'react';
import{ storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
//provider
//consumer - uses information provided by provider

 class ProductProvider extends Component {
     state={
         products: storeProducts,
         detailProduct: detailProduct

     }
     handleDetail = () => {
            console.log( 'handleDetail')
     }
     addToCart = () => {
         console.log('add to cart' )
     }
    render() {


        return (
            <ProductContext.Provider value={{ //value can be an object with methods and we can access it on productlist
 ...this.state,
 handleDetail: this.handleDetail,
 addToCart: this.addToCart,

            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer= ProductContext.Consumer;

export{ProductProvider, ProductConsumer};
