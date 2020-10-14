import React, { useEffect, useState } from 'react';
import Loading from '../../components/loading/loading';
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import Products from '../../components/_basket/products/products';

// this is Basket page
const BasketPage = (props) => {
    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Basket' /> }

    else {
        return (
            <Layout pageTitle='Basket'>
                <PageHeader title='Basket' />
                <Products />
            </Layout>
        )
    }
}
export default BasketPage;