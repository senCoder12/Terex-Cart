import React from 'react'

function SingleProduct({product}) {
  return (
    <div className='item'>
        <div className='name'>{product.name}</div>
        <div>
            <img src={product.imageURL} alt="product" />
        </div>
        <div className='display-flex lower-part'>
            <p className='price'>Price: {product.price}Rs</p>
            <button className='addToCartBtn'>ADD TO CART</button>
        </div>
    </div>
  )
}

export default SingleProduct