import React, { useEffect, useState } from 'react'
import Loading from '../../components/loading/loading';
import axios from 'axios';
import Layout from '../../components/layout/layout';
import PageHeader from '../../components/pageHeader/pageHeader';
import Products from '../../components/_search/products/products';
import Category from '../../components/category/category';

// this is Search page
const Search = ({ searchData }) => {
    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='Search' /> }

    else {
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
}

export default Search
Search.getInitialProps = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return { searchData: response.data };
}