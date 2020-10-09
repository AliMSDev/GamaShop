import React from 'react';
import Link from 'next/link';

// product item component for Products component
const ProductsItem = (props) => {
    return (
        <div className='basketPage_products_productsItem'>
            <div className='col-xs-12 col-s-12 col-m-12 col-l-7'>
                <figure>
                    <img src={props.src} alt={props.alt} />
                </figure>
                <Link href={`products/${props.link}`}><a>{props.title}</a></Link>
            </div >
            <div className='col-xs-6 col-s-3 col-m-3 col-l-1'>
                <span>${props.price}</span>
            </div>
            <div className='col-xs-6 col-s-4 col-m-5 col-l-2'>
                <span>{props.counter}</span>
                <div>
                    <button onClick={props.addItem} className={props.addClass}>+</button>
                    <button onClick={props.removeItem} className={props.removeClass}>-</button>
                </div>
            </div>
            <div className='col-xs-12 col-s-5 col-m-4 col-l-2'>
                <span>${props.total}</span>
                <button onClick={props.removeBasketItem}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                    <span>Remove from basket</span>
                </button>
            </div>
        </div >
    )
}

export default ProductsItem
