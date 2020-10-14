import React from 'react'
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import LoginComponent from '../../components/_signup_login/login/login';

// This is Login Page
const Login = () => {
    return (
        <Layout pageTitle='Login'>
            <PageHeader title='Login' />
            <LoginComponent />
        </Layout>
    )
}
export default Login
