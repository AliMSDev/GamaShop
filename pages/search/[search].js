import React from 'react'
import axios from 'axios';
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import Products from '../../components/_search/products/products';
import Category from '../../components/category/category';

// this is Search page
const Search = ({ searchData }) => {
    return (
        <Layout pageTitle='Search'>
            <PageHeader title='Search' />
            <section className='categoryPage container section-gap'>
                <Category />
                <Products searchProp={searchData} />
            </section>
        </Layout>
    )
}
export default Search
Search.getInitialProps = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return { searchData: response.data };
}