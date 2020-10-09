import React from 'react'

// brand item component
const BrandItem = (props) => {
    return (
        <figure className={props.class}>
            <img src={props.src} alt={props.alt}/>
        </figure>
    )
}

export default BrandItem
