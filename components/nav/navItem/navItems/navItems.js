import React from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { menuTogglefunc } from '../../../../redux/actions'

// nav items component
const NavItems = (props) => {
    // dispatch menu controll redux action 
    const dispatch = useDispatch();
    return (
        <li>
            <Link href={props.link}>
                <a onClick={() => dispatch(menuTogglefunc())}>{props.text}</a>
            </Link>
            {props.children}
        </li>
    )
}

export default NavItems;
