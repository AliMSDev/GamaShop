import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/layout';
import Loading from '../../components/loading/loading';
import PageHeader from '../../components/pageHeader/pageHeader';
import CheckoutBasket from '../../components/_checkout/checkoutBasket/checkoutBasket';
import CheckoutForm from '../../components/_checkout/checkoutForm/checkoutForm';

// this is Checkout page
const CheckoutPage = () => {
    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Checkout' /> }

    else {
        return (
            <Layout pageTitle='Checkout'>
                <PageHeader title='Checkout' />
                <section className='checkoutPage container section-gap'>
                    <CheckoutForm />
                    <CheckoutBasket />
                </section>
            </Layout>
        )
    }
}

export default CheckoutPage;
