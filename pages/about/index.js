import React from 'react'
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import AboutComponent from '../../components/_about/about';

// This is About Page
const About = () => {
        return (
            <Layout pageTitle='About'>
                <PageHeader title='About' />
                <AboutComponent />
            </Layout>
        )
    }

export default About
