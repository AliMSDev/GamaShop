import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading/loading';
import Head from 'next/head';
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import axios from 'axios';
import ProductsDetails from '../../components/_singleProducts/productDetails/productsDetails';
import Comments from '../../components/comments/comments';

// this is single product
const SingleProduct = ({ singleProducts }) => {
    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Product Details' /> }

    else {
        return (
            <>
                <Head>
                    <title>Product Details | Gama Store</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Layout>
                    <PageHeader title='Product details' />
                    <ProductsDetails productDetails={singleProducts} />
                    <section className='container singleProducts_comments'>
                        <Comments />
                    </section>
                </Layout>
            </>
        )
    }
}

export default SingleProduct
SingleProduct.getInitialProps = async (ctx) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${ctx.query.id}`);
    return { singleProducts: response.data };
}