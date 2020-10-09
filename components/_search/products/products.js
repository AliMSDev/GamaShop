import React, { useState } from 'react';
import ProductItems from '../../productItems/productItems';
import Alert from '../../alert/alert';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Modal from '../../modal/modal';

const Products = (props) => {

    // redux basket data state 
    let basketData = useSelector(state => state.basketReduce);

    // alert class and text state
    const [alertClass, setAlertClass] = useState('alert');
    const [alertText, setAlertText] = useState('');

    // alert component
    const alert = <Alert class={alertClass} text={alertText} />

    // warn alert function
    const warnAlert = () => {
        // set alert class and text and remove alert class after 3 seconds
        setAlertClass('alert show-alert warn');
        setAlertText('This item has been added')
        setTimeout(() => {
            if (alert != null) {
                setAlertClass('alert');
            }
        }, 3000);
    }

    // successfull alert function
    const successfullAlert = () => {
        // set alert class and text and remove alert class after 3 seconds
        setAlertClass('alert show-alert success');
        setAlertText('Successfully added to the basket')
        setTimeout(() => {
            if (alert != null) {
                setAlertClass('alert');
            }
        }, 3000);
    }

    // add item function
    const addtoBasket = (id) => {
        // give search data to newdata variable
        const newdata = [
            ...props.searchProp
        ]

        // give single product and pass into the variable
        const singleProduct = newdata.filter(x => x.id == id);

        // give basketDataLocal local storage data to alldata
        const allData = JSON.parse(localStorage.getItem('basketDataLocal'));

        // give alldata to basketdata
        basketData = allData;

        // check all items in redux store
        const checkBasket = allData.some(n => n.id === id);

        // conditional rendering if checkbasket is true or item is in basket then retrun a warn alert
        if (checkBasket) {
            warnAlert();
        }

        // conditional rendering if checkbasket is false then push new data in basketdata and basketDataLocal(local storage) and return a successfull alert
        else {
            basketData.push({ ...singleProduct[0], counter: 1 });
            localStorage.setItem('basketDataLocal', JSON.stringify(basketData))
            successfullAlert();
        }
    }
    // result variable
    let results = [];

    // router variable 
    const router = useRouter();

    // give title
    const title = router.query.search;

    // conditional rendering if search data is not undefined then return this component
    if (props.searchProp != undefined) {
        // search product from title and push it in result variable
        for (let i = 0; i < props.searchProp.length; i++) {
            if ((props.searchProp[i].title).toString().indexOf(title) != -1) {
                results.push(props.searchProp[i]);
            }
        }

        // map result data and give to mapped variable
        const mapped = results.map((n) => {
            return (<ProductItems clickHandler={() => addtoBasket(n.id)} key={n.id} class='productItems col-xs-12 col-s-6 col-m-4' src={n.image} alt={n.title} link={`/products/${n.id}`} text={n.title} price={n.price} />)
        })
        return (
            <>
                <section className='products_category_products col-xs-12 col-s-12 col-l-9'>
                    {
                        results.length != 0 ? <><ul><li>Search results: {title}</li></ul><div>{mapped}</div></> : <><Modal divclass='info' icon='fa fa-info' title='Information!' buttonclass='info' text={`This ${title} is not in our shop.`} btntext='Go home' link='/'/></>
                    }
                </section>
                {alert}
            </>
        )
    }
}
export default Products;
