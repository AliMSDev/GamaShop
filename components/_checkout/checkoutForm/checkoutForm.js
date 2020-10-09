import React, { useState } from 'react';
import Alert from '../../alert/alert';

// this is checkout form component of checkout page
const CheckoutForm = () => {

    // alert class and text state
    const [alertClass, setAlertClass] = useState('alert');
    const [alertText, setAlertText] = useState('');

    // alert component
    const alert = <Alert class={alertClass} text={alertText} />

    // successfull alert function
    const successfullAlert = () => {
        setAlertClass('alert show-alert success');
        setAlertText('Your order has been send')
        setTimeout(() => {
            if (alert != null) {
                setAlertClass('alert');
            }
        }, 3000);
    }

    // phone number handler function
    const phoneNumberHandler = (e) => {
        let counter = e.target.value.length;
        if (counter > 10) {
            return e.preventDefault();
        }
    }

    // submit form handler function
    const submitForm = (e) => {
        e.preventDefault();
        successfullAlert();
    }

    return (
        <>
        <div className='checkoutForm col-xs-12 col-s-12 col-l-8'>
            <h3>Billing Details</h3>
            <span className='lineBreak'></span>
            <form method='POST' action='' onSubmit={submitForm}>
                <input type='text' placeholder='First Name' required />
                <input type='text' placeholder='Last Name' required />
                <input type='email' placeholder='Email' required />
                <input type='number' placeholder='Phone Number' required onKeyPress={phoneNumberHandler} min='0' />
                <input type='text' placeholder='City' required />
                <input type='number' min='0' placeholder='Post Code' required />
                <textarea placeholder='Address' rows='10' required></textarea>
                <button>Order Now</button>
            </form>
        </div>
        {alert}
        </>
    )
}

export default CheckoutForm
