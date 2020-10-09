import React from 'react'
import FooterItem from './footerItem/footerItem'

// footer component
const Footer = () => {
    // go top button
    const handleClick = () => {
        document.querySelector('html').scrollTop = 0
    }
    return (
        <footer className='footer'>
            <div>
                <button onClick={handleClick}>
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </button>
            </div>
            <div className='container'>
                <FooterItem title='Category'
                    link1='/products/category/men clothing' text1='Men Clothing'
                    link2='/products/category/women clothing' text2='Women Clothing'
                    link3='/products/category/jewelery' text3='Jewelery'
                    link4='/products/category/electronics' text4='Electronics' />
                <FooterItem title='Links'
                    link1='/' text1='Home'
                    link2='/about' text2='About Us'
                    link3='/contact' text3='Contact'
                    link4='/blog' text4='Blog' />
                <FooterItem title='Shop'
                    link1='/login' text1='Login'
                    link2='/products' text2='Products'
                    link3='/basket' text3='Basket'
                    link4='/checkout' text4='Checkout' />
                <div className='col-xs-12 col-s-6 col-m-3'>
                    <figure>
                        <img src='/Images/blackFriday.jpg' alt='Black Friday' />
                    </figure>
                </div>
            </div>
        </footer>
    )
}

export default Footer
