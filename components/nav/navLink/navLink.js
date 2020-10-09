import React from 'react'
import { useSelector } from 'react-redux';
import NavLinks from './navLinks/navLinks';

// nav icon link component
const NavLink = (props) => {

    let authLocal = JSON.parse(localStorage.getItem('isAuthenticate'));

    // redux auth data state 
    let auth = useSelector(state => state.authenticationReduce);

    auth = authLocal;

    return (
        <ul className='navLink'>
            <NavLinks link='/basket' icon="fa fa-shopping-basket" />
            <NavLinks link={auth===true?'/panel':'/login'} icon="fa fa-user-o" />
            <NavLinks link='/' icon="fa fa-search" click={props.clickHandler}/>
        </ul>
    )
}

export default NavLink;