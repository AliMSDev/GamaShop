import React from 'react';
import Link from 'next/link'

const Undefinded = () => {
    return (
        <div className='error404 container'>
            <Link href="/">
                <a>
                    <figure>
                        <img src='/Images/error404.jpg' alt='404' />
                    </figure>
                </a>
            </Link>
        </div>
    )
}

export default Undefinded;
