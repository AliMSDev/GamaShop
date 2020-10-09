import React from 'react'
import Link from 'next/link';

// nav icon link item component
const NavLinks = (props) => {
    return (
        <li className='navLinks'>
            <Link href={props.link}>
                <a onClick={props.click}>
                    <i className={props.icon} aria-hidden="true"></i>
                </a>
            </Link>
        </li>
    )
}

export default NavLinks;
