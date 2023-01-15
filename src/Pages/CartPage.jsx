import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartProducts } from '../Redux/Features/ProductSlice';

function CartPage({ cartItems }) {
    const {cartProducts} = useSelector((state)=>({...state.products})); 
    const dispatch = useDispatch();
    const deleteHandler = (id) =>{
        let cartItemsAfterDelete = cartProducts.filter(elm=> elm.id != id);
        dispatch(setCartProducts(cartItemsAfterDelete));
    }
    const getTotalPrice = ()=> {
        if(!cartProducts.length) return 0;
        return cartProducts.reduce((aq,elm)=> aq+=elm.price);
    }
    return (
        <div style={{ marginTop: "97px" }}>
            <h2>Shopping Cart</h2>
            <div className='cart-parent'>
                {
                    cartProducts.map((item) => {
                        return (
                            <div className='display-flex cart-row'>
                                <img src={item.imageURL} alt="img" style={{ width: "10%" }} />
                                <div>
                                    <p>{item.name}</p>
                                    <p>Price: {item.price}Rs</p>
                                </div>
                                <div>
                                    {item.count} Item
                                </div>
                                <button className='dltBtn' onClick={()=>deleteHandler(item.id)}>Delete</button>
                            </div>
                        )
                    })
                }

            </div>
            <hr style={{ width: "80%" }} />
            <div>
                <span>Total Price: </span><span>{getTotalPrice()}Rs</span>
            </div>

        </div>
    )
}

export default CartPage