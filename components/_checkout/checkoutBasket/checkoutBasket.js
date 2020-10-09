import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from '../../modal/modal';
import CheckoutItem from './checkoutItem/checkoutItem';

// this is checkout basket component of checkout page
const CheckoutBasket = () => {

    let authLocal = JSON.parse(localStorage.getItem('isAuthenticate'));

    // redux auth data state 
    let auth = useSelector(state => state.authenticationReduce);

    auth = authLocal;

    // give basketData variable from redux
    let basketData = useSelector(state => state.basketReduce);

    // give basketDataLocal to allData
    const allData = JSON.parse(localStorage.getItem('basketDataLocal'));

    // give allData to basketData
    basketData = allData;
    if (auth) {
        // conditional rendering if basketData has items
        if (basketData.length != 0) {

            // map data from basketData and return checkoutItem
            let mapped = basketData.map(n => <CheckoutItem link={n.id} key={n.id} title={n.title} counter={n.counter} price={((n.price) * (n.counter)).toFixed(2)} />)

            // set totalPrice
            const [totalPrice] = useState(basketData.map(x => (x.price) * (x.counter)).reduce((total, number) => total + number).toFixed(2));

            // return component
            return (
                <div className='checkoutBasket col-xs-12 col-s-12 col-l-4'>
                    <h3>Your Order</h3>
                    <span className='lineBreak'></span>
                    <div>
                        {mapped}
                    </div>
                    <div>
                        Total: ${totalPrice}
                    </div>
                </div>
            )
        }

        // return modal if basketData doesn't have a item
        else {
            return (
                <Modal divclass='info' icon='fa fa-info' title='Information!' buttonclass='info' text='Your basket is empty.' link='/products' btntext='Go shopping' />
            )
        }
    }
    else {
        return <Modal divclass='info' icon='fa fa-info' title='Information!' buttonclass='info' text='You are not already sign in' link='/login' btntext='Login' />
    }
}
export default CheckoutBasket
