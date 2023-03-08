import React from 'react'
import Link from 'next/link';

// This is BlogItem Component
const BlogItem = (props) => {
    return (
        <div className='col-xs-12 col-s-12'>
            <figure className='col-xs-12 col-s-12 col-m-4'>
                <img src={props.src} alt={props.alt} />
            </figure>
            <div className='col-xs-12 col-s-12 col-m-6'>
                <h2>{props.title}</h2>
                <p dangerouslySetInnerHTML={props.describe} />
            </div>
            <div className='col-xs-12 col-s-12 col-m-2'>
                <Link href='/blog/[id]' as={props.link}>See more<i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
            </div>
            <span>N</span>
        </div>
    );
}

export default BlogItem
