import React from 'react'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

// This is Single Blog Component
const BlogDetails = () => {
    // give useRouter to router and give title of it
    const router = useRouter();
    const id = router.query.id;

    // give blogData from redux store
    const blogData = useSelector(state => state.blogReduce);

    // give single blog Data to singleData
    const singleData = blogData.filter(x => x.id == id);

    return (
        <section className='container section-gap singleBlog'>
            <figure>
                <img src={singleData[0].img} alt={singleData[0].title} />
            </figure>
            <h2>{singleData[0].title}</h2>
            <p dangerouslySetInnerHTML={{ __html: singleData[0].describe }} />
        </section>
    )
}

export default BlogDetails
