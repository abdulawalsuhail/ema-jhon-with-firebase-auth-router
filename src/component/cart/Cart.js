import React from 'react';
import './Cart.css'

const Cart = ({ cart, children }) => {

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h2 className='order'>Order summary</h2>
            <p>Selected items:{cart.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:${tax}</p>
            <h3>Grand Total:${grandTotal.toFixed(2)}</h3>
            {children}
        </div>
    );
};

export default Cart;