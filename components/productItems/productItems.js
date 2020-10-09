import React from 'react'
import Link from 'next/link';

// product items component
const ProductItems = (props) => {
    return (
        <div className={props.class}>
            <figure>
                <img src={props.src} alt={props.alt} />
            </figure>
            <Link href="/products/[id]" as={props.link}>
                <a>
                    {props.text}
                </a>
            </Link>
            <div>
                <button onClick={props.clickHandler}>
                    <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                    <span>Add to bag</span>
                </button>
            </div>
            <span>${props.price}</span>
        </div>
    )
}

export default ProductItems
