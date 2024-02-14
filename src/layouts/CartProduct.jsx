import React from 'react'
import { RxCross1 } from "react-icons/rx"
import { useAppDispatch } from '../redux/hooks'
import { removeFromCart } from '../redux/features/cartSlice';

const CartProduct = (props) => {
    const dispatch = useAppDispatch();

    return (
        <div className='flex justify-between items-cener'>
            <div className='flex items-center gap-4'>
                <img className='h-[40px] w-[40px]' src={props.img} alt="img" />
                <div className='space-y-2'>
                    <h3 className='font-medium'>{props.title}</h3>
                    <p className='text-gray-600 text-[14px]'>Qty: {props.quantity}</p>
                    <p className='text-gray-600 text-[14px]'>Price: ${props.price}</p>
                </div>
            </div>

            <RxCross1 className="cursor-pointer" onClick={() => dispatch(removeFromCart(props.id))} />

        </div>
    )
}

export default CartProduct