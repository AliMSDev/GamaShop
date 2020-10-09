import React from 'react';
import Link from 'next/link';

// this is checkout item component of checkout page
const CheckoutItem = (props) => {
    return (
        <div>
            <Link href={`/products/${props.link}`}><a className='col-xs-7 col-s-7'>{props.title}</a></Link>
            <span className='col-xs-2 col-s-2'>x{props.counter}</span>
            <span className='col-xs-3 col-s-3'>${props.price}</span>
        </div>
    )
}

export default CheckoutItem
