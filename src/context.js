import React, { Component } from 'react'

const ProductContext = React.createContext();
//provider
//consumer - uses information provided by provider

 class ProductProvider extends Component {
    render() {


        return (
            <ProductContext.Provider value="hello from context">
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer= ProductContext.Consumer;

export{ProductProvider, ProductConsumer};
