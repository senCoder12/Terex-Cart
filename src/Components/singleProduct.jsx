import React from 'react'

function SingleProduct() {
  return (
    <div className='item'>
        <div className='name'>Name</div>
        <div>
            <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="product" />
        </div>
        <div className='display-flex lower-part'>
            <p className='price'>Price: 250Rs</p>
            <button className='addToCartBtn'>ADD TO CART</button>
        </div>
    </div>
  )
}

export default SingleProduct