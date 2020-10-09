import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import Loading from '../../components/loading/loading';
import PageHeader from '../../components/pageHeader/pageHeader';
import ContactComponent from '../../components/_contact/contact';

// This is Contact Page
const Contact = () => {

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Contact' /> }

    else {
        return (
            <>
                <Head>
                    <title>Contact | Gama Store</title>
                </Head>
                <Layout>
                    <PageHeader title='Contact' />
                    <ContactComponent/>
                </Layout>
            </>
        )
    }
}

export default Contact
