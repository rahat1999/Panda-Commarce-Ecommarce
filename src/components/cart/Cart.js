import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    // console.log(props.cart)
    const { strMeal } = props.cart;
    return (
        <div className="cart-item ">
            <div className="container mb-1">
                <h6><li>{strMeal}</li></h6>
            </div>
        </div>
    );
};

export default Cart;
