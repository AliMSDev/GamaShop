import React from 'react'
import Link from 'next/link';

// This is Form Component for Signup or Login Page
const Form = (props) => {

    // submitHandler function
    const onSubmitHandler=(e)=>{
        e.preventDefault();
    }

    return (
        <div className='signup_login_form col-xs-12 col-s-12 col-m-6'>
            <form onSubmit={onSubmitHandler}>
                <h3>{props.title}</h3>
                <input type='text' placeholder='Username' onChange={props.changeUsername} value={props.usernameValue}/>
                <input type='password' placeholder='Password' onChange={props.changePassword} value={props.passwordValue}/>
                <Link href='/panel' legacyBehavior><button onClick={props.click}>{props.btntext}</button></Link>
            </form>
        </div>
    );
}

export default Form
