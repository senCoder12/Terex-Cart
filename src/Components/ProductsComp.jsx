import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllproducts } from '../Redux/Features/ProductSlice';
import SingleProduct from './singleProduct'

function ProductsComp() {
  const [products,setProducts] = useState([]);
  const dispatch = useDispatch();
  const {allProducts} = useSelector((state)=>({...state.products})); 
  useEffect(() => {
    dispatch(getAllproducts());
  },[])
  return (
    <div className='products'>
      {
        allProducts.map((product) =>{
          return <SingleProduct product={product} key={Math.random()+new Date()}/>
        })
      }
        
    </div>
  )
}

export default ProductsComp