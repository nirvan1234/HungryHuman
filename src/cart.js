import React from 'react'
import ItemCard from './components/ItemCard';
import { clearCart } from './utils/cartSlice';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { UseDispatch } from 'react-redux';


const Cart = () => {
    const cartItem = useSelector((store) => store.cart.items)
    console.log("cartItmes", cartItem);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }
    
    return (
        <div>
            <button className='p-2 m-2 bg-black text-white rounded-lg' onClick={handleClearCart}>
                clear cart
            </button>
            <ItemCard items={cartItem} />
        </div>
    )
}

export default Cart;