import React from 'react';
import Nav from '../nav/nav';
import { createStore } from 'redux';
import allReducer from '../../redux/reducers'
import { Provider } from 'react-redux';
import Footer from '../footer/footer';
import Developer from '../developer/developer';
import Head from 'next/head';

// redux store
const myStore = createStore(allReducer);

// layout component
const Layout = (props) => {

    // give basketDataLocal and pass it to allData
    const allData = JSON.parse(localStorage.getItem('basketDataLocal'));

    // give isAuthenticate and pass it to authenticate
    const authenticate = JSON.parse(localStorage.getItem('isAuthenticate'));

    // give users and pass it to users
    const users = JSON.parse(localStorage.getItem('users'));

    // give user and pass it to users
    const user = JSON.parse(localStorage.getItem('user'));

    // conditional rendering if allData is null
    if (allData === null) {
        localStorage.setItem('basketDataLocal', JSON.stringify([]))
    }

    // conditional rendering if authenticate is null
    if (authenticate === null) {
        localStorage.setItem('isAuthenticate', JSON.stringify(false))
    }

    // conditional rendering if users is null
    if (users === null) {
        localStorage.setItem('users', JSON.stringify([]))
    }

    // conditional rendering if user is null
    if (user === null) {
        localStorage.setItem('user', JSON.stringify([]))
    }

    return (
        <>
            <Head>
                <title>{props.pageTitle} | Gama Store</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Provider store={myStore}>
                <Nav />
                {props.children}
                <Footer />
                <Developer />
            </Provider>
        </>
    )
}

export default Layout;
