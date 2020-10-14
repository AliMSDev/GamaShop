import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Alert from '../../alert/alert';
import Modal from '../../modal/modal';
import Box from '../box/box';
import Form from '../form/form';

// This is Login Component
const LoginComponent = () => {

    // alert class and text state
    const [alertClass, setAlertClass] = useState('alert');
    const [alertText, setAlertText] = useState('');

    // alert component
    const alert = <Alert class={alertClass} text={alertText} />

    // successfull alert function
    const successfullAlert = (alertText) => {
        // set alert class and text and remove alert class after 3 seconds
        setAlertClass('alert show-alert success');
        setAlertText(alertText)
        setTimeout(() => {
            if (alert != null) {
                setAlertClass('alert')
            }
        }, 3000);
    }

    // error alert function
    const errorAlert = (alertText) => {
        // set alert class and text and remove alert class after 3 seconds
        setAlertClass('alert show-alert error');
        setAlertText(alertText)
        setTimeout(() => {
            if (alert != null) {
                setAlertClass('alert')
            }
        }, 3000);
    }


    // redux users data state 
    let users = useSelector(state => state.usersReduce);
    let auth = useSelector(state => state.authenticationReduce);

    // redux auth data state 
    let authenticate = useSelector(state => state.authenticationReduce);

    const [authLocal, setAuthLocal] = useState(false);
    const [allusers, setAllusers] = useState([]);

    useEffect(() => {
        // give users from local storage and pass it in to the allusers variable
        setAllusers(JSON.parse(localStorage.getItem('users')));

        // give isAuthenticate from localStorage and give it to authLocal
        setAuthLocal(JSON.parse(localStorage.getItem('isAuthenticate')))
    }, [])
    // give authLocal to authenticate
    authenticate = authLocal;

    // give allusers to users
    users = allusers;

    // username and password state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    // handleClick function for Login
    const handleClick = (e) => {
        // conditional rendering if username and password is not null
        if (username != '' && password != '') {
            // check username and password for Login
            const checkUsername = users.some(n => n.username === username);
            const checkPassword = users.some(n => n.password === password);

            // conditional rendering if checkUsername and checkPassword is false
            if (checkUsername === false || checkPassword === false) {
                errorAlert('Username or Password is wrong');
                e.preventDefault();
            }
            else {
                // give true to auth and set it to auth LocalStorage
                auth = true;
                localStorage.setItem('isAuthenticate', JSON.stringify(auth));

                // save user info and set it to user localStorage
                const saveUserInfo = {
                    username: username,
                    password: password
                }
                localStorage.setItem('user', JSON.stringify(saveUserInfo));
            }
        }
        else {
            errorAlert('Username and Password must be filled');
            e.preventDefault();
        }
    }

    // changeUserHandler function
    const changeUserHandler = (e) => {
        setUsername(e.target.value);
    }

    // changePasswordHandler function
    const changePasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    // conditional rendering if authenticate is false
    if (authenticate === false) {
        return (
            <>
                <section className='signup_login container section-gap'>
                    <Box text1='New to website' text2='Create your account now' link='/signup' btntext='Create an account' />
                    <Form title='Login' btntext='Login' click={handleClick} changeUsername={changeUserHandler} usernameValue={username} changePassword={changePasswordHandler} passwordValue={password} />
                </section>
                {alert}
            </>
        )
    }
    // else return a Modal
    else {
        return <Modal divclass='info' icon='fa fa-info' title='Information!' buttonclass='info' text='You are already login' link='/panel' btntext='Panel' />
    }
}

export default LoginComponent
