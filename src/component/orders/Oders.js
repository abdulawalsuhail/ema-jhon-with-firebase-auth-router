
import { faArrowRight, faCreditCardAlt, faVectorSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './Oders.css';

const Oders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products)
    const navigate = useNavigate()
    const handleRemoveCart = product => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id)
    }
    return (
        <div>
            <div className='shop-container'>
                <div className="review-items-container">
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveCart={handleRemoveCart} />)
                    }
                </div>
                <div className="cart-containers">
                    <Cart cart={cart}>

                        <button onClick={() => navigate('/shipment')} className='btn-clr'>Proceed Order <FontAwesomeIcon icon={faCreditCardAlt} /></button>


                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Oders;