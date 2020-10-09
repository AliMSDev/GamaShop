import React from 'react';
import Link from 'next/link';

// footer item component
const FooterItem = (props) => {
    return (
        <div className='col-xs-12 col-s-6 col-m-3'>
            <h5>{props.title}</h5>
            <Link href={props.link1}>
                <a>{props.text1}</a>
            </Link>
            <Link href={props.link2}>
                <a>{props.text2}</a>
            </Link>
            <Link href={props.link3}>
                <a>{props.text3}</a>
            </Link>
            <Link href={props.link4}>
                <a>{props.text4}</a>
            </Link>
        </div>
    )
}

export default FooterItem
