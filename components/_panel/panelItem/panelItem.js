import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Modal from '../../modal/modal';
import PanelItems from './panelItems/panelItems'

// This PanelItem Component
const PanelItem = () => {
    // give isauthenticate from Local Storage and give it to authLocal variable
    let authLocal = JSON.parse(localStorage.getItem('isAuthenticate'));

    // redux auth data state 
    let auth = useSelector(state => state.authenticationReduce);

    // give authLocal to auth variable
    auth = authLocal;

    // exitHandler function
    const exitHandler = (e) => {
        // give false to auth
        auth = false;

        // set isAuthenticate Local Storage
        localStorage.setItem('isAuthenticate', JSON.stringify(auth));

        // show modal
        setShow(<Modal divclass='info' icon='fa fa-info' title='Information!' buttonclass='info' text='You are sign out' link='/login' btntext='Login' />)
        
        e.preventDefault();
    }

    // signout icon for Exit button
    const signout = <><i class="fa fa-sign-out" aria-hidden="true"></i> Exit</>

    // show menu or modal state
    const [show, setShow] = useState(
    <ul>
        <PanelItems link='/' text='Home' />
        <PanelItems link='/products' text='Products' />
        <PanelItems link='/basket' text='Basket' />
        <PanelItems link='/checkout' text='Checkout' />
        <PanelItems link='/exit' text={signout} click={exitHandler} />
    </ul>
    )

    return (
        <div className='col-xs-12 col-s-5'>
            <div><i className="fa fa-th" aria-hidden="true"></i> <span>Menu</span></div>
            {show}
        </div>
    )
}

export default PanelItem
