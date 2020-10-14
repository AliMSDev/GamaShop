import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Alert from '../../alert/alert';
import Modal from '../../modal/modal';
import Box from '../box/box';
import Form from '../form/form';

// This is Signup Component
const SignupComponent = () => {

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

    // warn alert function
    const warnAlert = (alertText) => {
        // set alert class and text and remove alert class after 3 seconds
        setAlertClass('alert show-alert warn');
        setAlertText(alertText)
        setTimeout(() => {
            if (alert != null) {
                setAlertClass('alert')
            }
        }, 3000);
    }

    // redux users data state
    let users = useSelector(state => state.usersReduce);

    // redux auth data state
    let authenticate = useSelector(state => state.authenticationReduce);

    const [allusers, setAllusers] = useState([]);
    const [authLocal, setAuthLocal] = useState(false);

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

    // handleClick function for Signup
    const handleClick = (e) => {
        e.preventDefault();
        // conditional rendering if username and password is not null
        if (username != '' && password != '') {
            // check username for signup
            const checkUsers = users.some(n => n.username === username);
            // conditional rendering if checkuser is true
            if (checkUsers) {
                warnAlert('This username has been taken')
            }
            // else save user and push it to local storage(users)
            else {
                const saveUser = {
                    username: username,
                    password: password
                }
                users.push(saveUser);
                localStorage.setItem('users', JSON.stringify(users))
                successfullAlert('Your registration was successful')
            }
        }
        else {
            errorAlert('Username and Password must be filled')
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
                    <Box text1='Have you an account?' text2='Login now' link='/login' btntext='Login' />
                    <Form title='Sign up' btntext='Sign up' click={handleClick} changeUsername={changeUserHandler} usernameValue={username} changePassword={changePasswordHandler} passwordValue={password} />
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

export default SignupComponent
