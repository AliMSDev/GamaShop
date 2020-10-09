import React from 'react'
import Link from 'next/link';

// This is a Box Component with a picture for Signup or Login Page
const Box = (props) => {
    return (
        <div className='signup_login_box col-xs-12 col-s-12 col-m-6'>
            <p>{props.text1} <br/> {props.text2}</p>
            <Link href={props.link}><button>{props.btntext}</button></Link>
        </div>
    )
}

export default Box
