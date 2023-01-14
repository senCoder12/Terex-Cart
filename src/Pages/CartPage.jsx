import React from 'react'

function CartPage() {
  return (
    <div style={{marginTop: "97px"}}>
        <h2>Shopping Cart</h2>
        <div className='cart-parent'>
            <div className='display-flex cart-row'>
                <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="" style={{width: "10%"}}/>
                <div>
                    <p>Black Tea</p>
                    <p>Price: 250Rs</p>
                </div>
                <div>
                    1 Item
                </div>
                <button className='dltBtn'>Delete</button>
            </div>
            <div className='display-flex cart-row'>
                <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="" style={{width: "10%"}}/>
                <div>
                    <p>Black Tea</p>
                    <p>Price: 250Rs</p>
                </div>
                <div>
                    1 Item
                </div>
                <button className='dltBtn'>Delete</button>
            </div>
            <div className='display-flex cart-row'>
                <img src="https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/polo-tshirts.png" alt="" style={{width: "10%"}}/>
                <div>
                    <p>Black Tea</p>
                    <p>Price: 250Rs</p>
                </div>
                <div>
                    1 Item
                </div>
                <button className='dltBtn'>Delete</button>
            </div>
        </div>
        <hr style={{width: "80%"}}/>
        <div>
            <span>Total Price: </span><span>250Rs</span>
        </div>

    </div>
  )
}

export default CartPage