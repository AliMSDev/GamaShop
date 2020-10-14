import React from 'react'
import axios from "axios";
import Layout from '../components/layout/layout'
import Header from '../components/_home/header/header'
import Works from '../components/_home/works/works'
import Gallery from '../components/_home/gallery/gallery'
import Products from '../components/_home/products/products'
import Offer from '../components/_home/offer/offer'
import Brand from "../components/brand/brand";

// this is Home page
export default function Home({ data }) {
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
Home.getInitialProps = async () => {
  const response = await axios.get('https://fakestoreapi.com/products?limit=8');
  return { data: response.data };
}