import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '../../../components/layout/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PageHeader from '../../../components/pageHeader/pageHeader';
import Category from '../../../components/category/category';
import Loading from '../../../components/loading/loading';
import Products from '../../../components/_category/products/products';

// this is Category page
const CategoryPage = ({ categoryData }) => {
    // give useRouter to router and give title of it
    const router = useRouter();
    const title = router.query.name;

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title={title} /> }

    else {
        return (
            <>
                <Head>
                    <title>{title} | Gama Store</title>
                </Head>
                <Layout>
                    <PageHeader title={title} />
                    <section className='categoryPage container section-gap'>
                        <Category />
                        <Products category={categoryData} title={title} />
                    </section>
                </Layout>
            </>
        )
    }
}
export default CategoryPage

CategoryPage.getInitialProps = async (ctx) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${ctx.query.name}`);
    return { categoryData: response.data };
}