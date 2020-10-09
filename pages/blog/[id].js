import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import Loading from '../../components/loading/loading';
import PageHeader from '../../components/pageHeader/pageHeader';
import BlogDetails from '../../components/_singleBlog/blogDetails/blogDetails';

// This is Single Blog Page
const SingleBlog = () => {

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Blog Details' /> }

    else {
        return (
            <>
                <Head>
                    <title>Blog Details | Gama Store</title>
                </Head>
                <Layout>
                    <PageHeader title='Blog Details' />
                    <BlogDetails />
                </Layout>
            </>
        )
    }
}

export default SingleBlog
