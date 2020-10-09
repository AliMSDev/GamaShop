import React from 'react'
import { useSelector } from 'react-redux';
import BlogItem from '../blogitem/blogItem';

// This is BlogItem Component
const BlogItems = () => {
    // give blogData from redux store
    const blogData = useSelector(state => state.blogReduce);

    // map blogData and give it to mapped variable
    const mapped = blogData.map(n => <BlogItem src={n.img} alt={n.title} title={n.title} describe={{ __html: n.expect}} link={`/blog/${n.id}`} key={n.id} />)

    return (
        <section className='section-gap blog container'>
            {mapped}
        </section>
    )
}

export default BlogItems;
