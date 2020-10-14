import React from 'react'
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import BlogItems from '../../components/_blog/blogItems/blogItems';

// This is Blog Page
const Blog = () => {
        return (
            <Layout pageTitle='Blog'>
                <PageHeader title='Blog' />
                <BlogItems />
            </Layout>
        )
    }

export default Blog
