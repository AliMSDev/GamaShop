import React, { useState } from 'react';
import Link from 'next/link';

// nav search component
const NavSearch = (props) => {
    // text state
    const [text, setText] = useState('')

    // change text handler
    const changeHandler = (e) => {
        setText(e.target.value);
    }

    return (
        <section className='navSearch navSearch-hide'>
            <div className='container'>
                <button onClick={props.click}><span></span><span></span></button>
                <input type='text' placeholder='Search' onChange={changeHandler} value={text} />
                <Link legacyBehavior href={`/search/${text}`}>
                    <a><i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </Link>
            </div>
        </section>
    )
}

export default NavSearch;