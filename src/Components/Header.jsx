import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
function Header() {
  const {cartProducts} = useSelector((state)=>({...state.products})); 
  return (
    <div className='header'>
        <h3>Terex Products</h3>
        <div className='display-flex'>
            <Link to={"/"}><p>Products</p></Link>
            <Link to={"/cart"}>
              <div>
                <div className='badge'>{cartProducts.length}</div>
                <img src="shopping.png" alt="" className='curtIcon'/>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Header