import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import ButtonContainer from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart,brand}= value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* start title */}

                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted my-5">
                                    <h1>{title}</h1>
                                </div>

                            </div>
                            {/* end title */}


                            {/* product info */}

                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 ">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                {/* product text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2> {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Kit Sponsor:  <span className="text-uppercase">
                                            {brand}
                                        </span>
                                    </h4>
                                    <h4> <strong> Price : <span>$</span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Description</p>
                                    <p className="text-muted lead">{info}</p>
                                    {/* buttons */}
                                    <div>
                                        < Link to='/'>
                                            <ButtonContainer> back to products</ButtonContainer>
                                            <ButtonContainer
                                            cart 
                                            disabled={inCart?true:false}
                                            onClick={()=>{
                                                value.addToCart(id);
                                                 value.openModal(id);

                                            }}
                                            >
                                                {inCart?"inCart": "add to cart"}

                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            
                                

                        </div>
                    )
                    
                }}
            </ProductConsumer>
        
        )
    }
}
