import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <h3>Terex Products</h3>
        <div className='display-flex'>
            <Link to={"/"}><p>Products</p></Link>
            <Link to={"/cart"}>
              <div>
                <div className='badge'>1</div>
                <img src="shopping.png" alt="" className='curtIcon'/>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default Header