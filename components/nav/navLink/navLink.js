import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { menuTogglefunc } from '../../../redux/actions';
import NavLinks from './navLinks/navLinks';

// nav icon link component
const NavLink = (props) => {
    // give isAuthenticate from localStorage and give it to authLocal variable
    let authLocal = JSON.parse(localStorage.getItem('isAuthenticate'));

    // redux auth data state 
    let auth = useSelector(state => state.authenticationReduce);

    // give authLocal to auth
    auth = authLocal;

    // dispatch menu controll redux action 
    const dispatch = useDispatch();

    return (
        <ul className='navLink'>
            <NavLinks link='/basket' icon="fa fa-shopping-basket" click={() => dispatch(menuTogglefunc())}/>
            <NavLinks link={auth===true?'/panel':'/login'} icon="fa fa-user-o" click={() => dispatch(menuTogglefunc())} />
            <NavLinks link='/' icon="fa fa-search" click={props.clickHandler}/>
        </ul>
    )
}

export default NavLink;