import React from 'react';
import { useDispatch } from 'react-redux';
import { menuTogglefunc } from '../../../redux/actions'

// menu nav toggle button component
const NavToggle = (props) => {
    // dispatch redux action for controll nav
    const dispatch = useDispatch();

    return (
        <div className={props.class}>
            <button onClick={() => dispatch(menuTogglefunc())}>
                <span></span>
                <span></span>
            </button>
        </div>
    )
}

export default NavToggle
