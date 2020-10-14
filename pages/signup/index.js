import React from 'react'
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import SignupComponent from '../../components/_signup_login/signup/signup';

// This is Signup Page
const Signup = () => {
    return (
        <Layout pageTitle='Sign up'>
            <PageHeader title='Sign up' />
            <SignupComponent />
        </Layout>
    )
}
export default Signup
