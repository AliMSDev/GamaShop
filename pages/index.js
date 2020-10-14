import React, { useEffect, useState } from 'react'
import axios from "axios";
import Layout from '../components/layout/layout'
import Header from '../components/_home/header/header'
import Works from '../components/_home/works/works'
import Gallery from '../components/_home/gallery/gallery'
import Products from '../components/_home/products/products'
import Offer from '../components/_home/offer/offer'
import Brand from "../components/brand/brand";
import Loading from '../components/loading/loading';

// this is Home page
export default function Home({ data }) {
  // set loading
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, []);

  if (loading) { return <Loading title='Home' /> }

  else {
    return (
      <Layout pageTitle='Home'>
        <Header />
        <Works />
        <Gallery />
        <Products data={data} />
        <Offer />
        <Brand />
      </Layout>
    )
  }
}
Home.getInitialProps = async () => {
  const response = await axios.get('https://fakestoreapi.com/products?limit=8');
  return { data: response.data };
}