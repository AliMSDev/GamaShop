import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import Loading from '../../components/loading/loading';
import PageHeader from '../../components/pageHeader/pageHeader';
import SignupComponent from '../../components/_signup_login/signup/signup';

// This is Signup Page
const Signup = () => {

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Sign up' /> }

    else {
        return (
            <Layout pageTitle='Sign up'>
                <PageHeader title='Sign up' />
                <SignupComponent />
            </Layout>
        )
    }
}

export default Signup
