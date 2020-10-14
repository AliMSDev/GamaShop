import React from 'react'
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import ContactComponent from '../../components/_contact/contact';

// This is Contact Page
const Contact = () => {
        return (
            <Layout pageTitle='Contact'>
                <PageHeader title='Contact' />
                <ContactComponent />
            </Layout>
        )
    }

export default Contact
