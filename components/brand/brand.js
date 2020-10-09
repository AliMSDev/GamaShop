import React, { Component } from 'react'
import BrandItem from './brandItem/brandItem'

// brand component
const Brand = () => {
    return (
        <section className='container brand section-gap'>
            <BrandItem class='col-xs-12 col-s-6 col-m-4 col-l-2' src='/Images/b1.png' alt='brand 1' />
            <BrandItem class='col-xs-12 col-s-6 col-m-4 col-l-2' src='/Images/b2.png' alt='brand 2' />
            <BrandItem class='col-xs-12 col-s-6 col-m-4 col-l-2' src='/Images/b3.png' alt='brand 3' />
            <BrandItem class='col-xs-12 col-s-6 col-m-4 col-l-2' src='/Images/b4.png' alt='brand 4' />
            <BrandItem class='col-xs-12 col-s-6 col-m-4 col-l-2' src='/Images/b5.png' alt='brand 5' />
            <BrandItem class='col-xs-12 col-s-6 col-m-4 col-l-2' src='/Images/b3.png' alt='brand 6' />
        </section>
    )
}

export default Brand
