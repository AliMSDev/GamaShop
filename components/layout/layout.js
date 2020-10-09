import React from 'react';
import Nav from '../nav/nav';
import { createStore } from 'redux';
import allReducer from '../../redux/reducers'
import { Provider } from 'react-redux';
import Footer from '../footer/footer';
import Developer from '../developer/developer';

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
    if (allData=== null) {
        localStorage.setItem('basketDataLocal',JSON.stringify([]))
    }

    // conditional rendering if authenticate is null
    if(authenticate===null){
        localStorage.setItem('isAuthenticate',JSON.stringify(false))
    }

    // conditional rendering if users is null
    if(users===null){
        localStorage.setItem('users',JSON.stringify([]))
    }

    // conditional rendering if user is null
    if(user===null){
        localStorage.setItem('user',JSON.stringify([]))
    }
    
    return (
        <Provider store={myStore}>
            <Nav />
            {props.children}
            <Footer />
            <Developer />
        </Provider>
    )
}

export default Layout;
