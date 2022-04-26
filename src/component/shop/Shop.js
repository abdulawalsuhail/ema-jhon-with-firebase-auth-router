import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate()
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count
                const pages = Math.ceil(count / 10)
                setPageCount(pages)
            })
    }, [])

    const handleAddToCart = (selectedProduct) => {
        // const newCart =[...cart, product];
        let newCart = [];
        const exists = cart.find(product => product._id === selectedProduct._id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            // selectedProduct.quantity=1;
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ""}
                                onClick={() => setPage(number)}
                            >{number + 1}</button>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>

                    <button onClick={() => navigate('/order')} className='btn-clr'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>

                </Cart>
            </div>
        </div>
    );
};

export default Shop;