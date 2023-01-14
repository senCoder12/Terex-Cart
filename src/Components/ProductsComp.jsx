import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import SingleProduct from './singleProduct'

function ProductsComp() {
  const [products,setProducts] = useState([]);
  const getProducts = () => {
    fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
    .then((res) => {
      return res.json()
    }).then((products) => {
      setProducts(products)
    }).catch(() => {
      setProducts([]);
    });
  }
  useEffect(() => {
    getProducts();
  },[])
  return (
    <div className='products'>
      {
        products.map((product) =>{
          return <SingleProduct product={product}/>
        })
      }
        
    </div>
  )
}

export default ProductsComp