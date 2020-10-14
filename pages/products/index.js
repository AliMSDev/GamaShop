import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout/layout';
import Category from '../../components/category/category';
import Products from '../../components/_products/products/products';
import PageHeader from '../../components/pageHeader/pageHeader';
import axios from "axios";
import Loading from '../../components/loading/loading';

// this is Product page
const ProductsPage = ({ productsData }) => {
    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Products' /> }

    else {
        return (
            <Layout pageTitle='Products'>
                <PageHeader title='Products' />
                <section className='products container section-gap'>
                    <Category />
                    <Products products={productsData} title='All products' />
                </section>
            </Layout>
        )
    }
}
export default ProductsPage;

ProductsPage.getInitialProps = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return { productsData: response.data };
}