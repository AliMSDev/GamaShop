import React, { useEffect, useState } from 'react';
import ProductItems from '../../productItems/productItems';
import Alert from '../../alert/alert';
import { useSelector } from 'react-redux';
import Pagination from '../../pagination/pagination';

// this is products component of products page
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
        setAlertText('This item has been added');
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
        setAlertText('Successfully added to the basket');
        setTimeout(() => {
            if (alert != null) {
                setAlertClass('alert');
            }
        }, 3000);
    }

    // add item function
    const addtoBasket = (id) => {
        // give products data to newdata variable
        const newdata = [
            ...props.products
        ]

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
            basketData.push({ ...newdata[id - 1], counter: 1 });
            localStorage.setItem('basketDataLocal', JSON.stringify(basketData))
            successfullAlert();
        }
    }


    // conditional rendering if products data is not undefined then return this component
    if (props.products != undefined) {

        // mapping and pagination
        const [data, setData] = useState();

        // page 1 variable
        let page1;

        // map data from products data and return 6 productItems in page 1
        page1 = props.products.slice(0, 6).map((n) => {
            return (<ProductItems clickHandler={() => addtoBasket(n.id)} key={n.id} class='productItems col-xs-12 col-s-6 col-m-4' src={n.image} alt={n.title} link={`/products/${n.id}`} text={n.title} price={n.price} />)
        })

        // active page buttons function
        const addActive = (id) => {
            document.getElementById(`btn-page-${id}`).classList.add('active-page');
        }

        // disabled page buttons function
        const removeActive = (id) => {
            document.getElementById(`btn-page-${id}`).classList.remove('active-page');
        }

        // product length and page number cheker and page number and page button variables
        let productLength, pageNumberChecker, pageNumber;
        let btnPage = [];

        // give product length from products data
        productLength = props.products.length;

        // check page number 
        pageNumberChecker = productLength % 6;

        // give page number from product length
        pageNumber = productLength / 6;

        // conditional rendering if pagenumberchecker is not zero then pagenumber + 1 and floor it
        if (pageNumberChecker != 0) {
            pageNumber += 1
            pageNumber = Math.floor(pageNumber)
        }

        // counter variable
        let counter = [];

        // loop with pagenumber for create button pages
        for (let i = 1; i <= pageNumber; i++) {
            let id = `btn-page-${i}`;
            btnPage.push(<Pagination click={() => showPageHandler(i)} idName={id} class='' page={i} key={i} />)
            counter.push(i);
        }


        // pagearray variable for slice and map data
        let pageArray;

        // show page function
        const showPageHandler = (id) => {
            // give slice and map data of products data to pagearray
            pageArray = props.products.slice((id - 1) * 6, id * 6).map((n) => {
                return (<ProductItems clickHandler={() => addtoBasket(n.id)} key={n.id} class='productItems col-xs-12 col-s-6 col-m-4' src={n.image} alt={n.title} link={`/products/${n.id}`} text={n.title} price={n.price} />)
            });

            // give pagearray to setdata for showing data
            setData(pageArray);

            // active button
            addActive(id);

            // disabled buttons
            counter.filter(x => x != id).map((n) => {
                removeActive(n);
            })
        }

        useEffect(() => {
            // show page 1 is mapped
            setData(page1)

            // give active-page class to button page 1
            document.getElementById('btn-page-1').classList.add('active-page');
        }, [])

        return (
            <>
                <section className='products_category_products col-xs-12 col-s-12 col-l-9'>
                    <ul>
                        <li>{props.title}</li>
                    </ul>
                    <div>
                        {data}
                    </div>
                    <div className='pagination'>
                        <span></span>
                        {btnPage}
                        <span></span>
                    </div>
                </section>
                {alert}
            </>
        )
    }
}

export default Products
