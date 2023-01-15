import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../Redux/Features/ProductSlice';

function SingleProduct({product}) {
  const {cartProducts} = useSelector((state)=>({...state.products})); 
  const dispatch = useDispatch();
  const addToCart = (product)=> {
    console.log("product")
    dispatch(setCartProducts({...cartProducts,product}));
  }
  return (
    <div className='item'>
        <div className='name'>{product.name}</div>
        <div>
            <img src={product.imageURL} alt="product" />
        </div>
        <div className='display-flex lower-part'>
            <p className='price'>Price: {product.price}Rs</p>
            <button onClick={()=>addToCart(product)} className='addToCartBtn'>ADD TO CART</button>
        </div>
    </div>
  )
}

export default SingleProduct