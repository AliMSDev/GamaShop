import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import Loading from '../../components/loading/loading';
import PageHeader from '../../components/pageHeader/pageHeader';
import LoginComponent from '../../components/_signup_login/login/login';

// This is Login Page
const Login = () => {

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Login' /> }

    else {
        return (
            <Layout pageTitle='Login'>
                <PageHeader title='Login' />
                <LoginComponent />
            </Layout>
        )
    }
}

export default Login
