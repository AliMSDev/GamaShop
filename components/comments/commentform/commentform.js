import React, { useState } from 'react'
import Alert from '../../alert/alert';

// comment form component
const Commentform = () => {
    // alert class and text state
    const [alertClass, setAlertClass] = useState('alert');
    const [alertText, setAlertText] = useState('');

    // alert component
    const alert = <Alert class={alertClass} text={alertText} />

    // successfull alert function
    const successfullAlert = () => {
        // set alert class and text and remove alert class after 3 seconds
        setAlertClass('alert show-alert success');
        setAlertText('Your comments will be send')
        setTimeout(() => {
            if (alert != null) {
                setAlertClass('alert');
            }
        }, 3000);
    }

    // submit from handler
    const submitForm = (e) => {
        e.preventDefault();
        successfullAlert();
    }
    return (
        <>
            <form method='POST' action='' onSubmit={submitForm}>
                <input type='text' placeholder='Full Name' required />
                <input type='email' placeholder='Email' required />
                <textarea placeholder='Review' rows='10' required></textarea>
                <button>Submit Now</button>
            </form>
            {alert}
        </>
    )
}

export default Commentform
