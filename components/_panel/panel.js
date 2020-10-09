import React from 'react'
import { useSelector } from 'react-redux';
import Modal from '../modal/modal';
import PanelInfo from './panelInfo/panelInfo'
import PanelItem from './panelItem/panelItem'

// This is Panel Component
const PanelComponent = () => {

    // give isAuthenticate from Local Storage and give it authLocal
    let authLocal = JSON.parse(localStorage.getItem('isAuthenticate'));

    // redux auth data state 
    let auth = useSelector(state => state.authenticationReduce);

    // give authLocal to auth variable
    auth = authLocal;

    // conditional rendering if auth is true then show Panel
    if (auth) {
        return (
            <div className='section-gap panel'>
                <PanelItem />
                <PanelInfo />
            </div>
        )
    }
    // else show Modal
    else {
        return <Modal divclass='info' icon='fa fa-info' title='Information!' buttonclass='info' text='You are not already sign in' link='/login' btntext='Login' />
    }
}
export default PanelComponent
