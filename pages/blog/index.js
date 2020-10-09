import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import Loading from '../../components/loading/loading';
import PageHeader from '../../components/pageHeader/pageHeader';
import BlogItems from '../../components/_blog/blogItems/blogItems';

// This is Blog Page
const Blog = () => {

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Blog' /> }

    else {
        return (
            <>
                <Head>
                    <title>Blog | Gama Store</title>
                </Head>
                <Layout>
                    <PageHeader title='Blog' />
                    <BlogItems />
                </Layout>
            </>
        )
    }
}

export default Blog
