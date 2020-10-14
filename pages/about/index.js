import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import Loading from '../../components/loading/loading';
import PageHeader from '../../components/pageHeader/pageHeader';
import AboutComponent from '../../components/_about/about';

// This is About Page
const About = () => {

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='About' /> }

    else {
        return (
            <Layout pageTitle='About'>
                <PageHeader title='About' />
                <AboutComponent />
            </Layout>
        )
    }
}

export default About
