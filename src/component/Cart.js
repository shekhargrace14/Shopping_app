import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { delCart } from '../redux/action/index';

const Cart = () => {

    const state = useSelector((state)=> state.addItem)
    const dispatch  =useDispatch()
    const cartItems = (cartItems)=>{
            <div className='px-4 my-5 bg-light ropunded-3'>
                <div className='container'>
                    <button className='btn'></button>
                    <div className='row'>
                        <div  className='col-md-4'>
                                <h3>This is cart</h3>
                        </div>
                    </div>
                </div>
            </div>
    }
    return (
        <div>
            {
                state.length !== 0 && state.map(cartItems)
            }
        </div>
    );
};

export default Cart;