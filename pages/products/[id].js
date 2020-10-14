import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading/loading';
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
            <Layout pageTitle='Product Details'>
                <PageHeader title='Product details' />
                <ProductsDetails productDetails={singleProducts} />
                <section className='container singleProducts_comments'>
                    <Comments />
                </section>
            </Layout>
        )
    }
}

export default SingleProduct
SingleProduct.getInitialProps = async (ctx) => {
    const response = await axios.get(`https://fakestoreapi.com/products/${ctx.query.id}`);
    return { singleProducts: response.data };
}