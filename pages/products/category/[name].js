import React from 'react'
import axios from 'axios';
import Layout from '../../../components/layout/layout';
import { useRouter } from 'next/router';
import PageHeader from '../../../components/pageHeader/pageHeader';
import Category from '../../../components/category/category';
import Products from '../../../components/_category/products/products';

// this is Category page
const CategoryPage = ({ categoryData }) => {
    // give useRouter to router and give title of it
    const router = useRouter();
    const title = router.query.name;
    return (
        <Layout pageTitle={title}>
            <PageHeader title={title} />
            <section className='categoryPage container section-gap'>
                <Category />
                <Products category={categoryData} title={title} />
            </section>
        </Layout>
    )
}
export default CategoryPage

CategoryPage.getInitialProps = async (ctx) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${ctx.query.name}`);
    return { categoryData: response.data };
}