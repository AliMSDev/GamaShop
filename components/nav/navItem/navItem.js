import React from 'react'
import NavItems from './navItems/navItems'
import Link from 'next/link';

// nav item component
const NavItem = () => {
    return (
        <ul className='navItem'>
            <NavItems link='/' text='Home' />
            <NavItems link='/products' text='Shop'>
                <ul>
                    <li>
                        <Link href='/products'>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href='/basket'>
                            Basket
                        </Link>
                    </li>
                    <li>
                        <Link href='/checkout'>
                            Checkout
                        </Link>
                    </li>
                </ul>
            </NavItems>
            <NavItems link='/about' text='About' />
            <NavItems link='/blog' text='Blog' />
            <NavItems link='/contact' text='Contact' />

        </ul>
    );
}

export default NavItem;
