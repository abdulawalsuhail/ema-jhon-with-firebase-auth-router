import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {

    let total=0;
    let shipping=0;
    for(const product of cart){
        total= total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax =(total*0.1).toFixed(2);
    return (
        <div className='cart'>
             <h2 className='order'>Order summary</h2>
             <p>Selected items:{cart.length}</p>
             <p>Total Price:${total}</p>
             <p>Total Shipping Charge:${shipping}</p>
             <p>Tax:${tax}</p>
             <h3>Grand Total:</h3>
        </div>
    );
};

export default Cart;