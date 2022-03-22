import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css';

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart= getStoredCart();
        const savedCart=[];
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id===id)
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity=quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
     },[products])


    const handleAddToCart =(selectedProduct)=>{
        // const newCart =[...cart, product];
        let newCart=[];
        const exists = cart.find(product=>product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1;
            newCart=[...cart, selectedProduct];
        }else{
            // selectedProduct.quantity=1;
            const rest = cart.filter(product=>product.id !== selectedProduct.id);
            exists.quantity=exists.quantity+1;
            newCart=[...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)    
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;