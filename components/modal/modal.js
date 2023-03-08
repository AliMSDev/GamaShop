import React from 'react';
import Link from 'next/link';

// modal component
const Modal = (props) => {
    return (
        <section className='modal'>
            <div>
                <div className={props.divclass}>
                    <i className={props.icon} aria-hidden="true"></i>
                </div>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                    <Link href={props.link} legacyBehavior><button className={props.buttonclass}>{props.btntext}</button></Link>
                </div>
            </div>
        </section>
    );
}

export default Modal
