import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Alert from '../../alert/alert';
import ProductsItem from './productsItem/productsItem'
import Link from 'next/link';
import Modal from '../../modal/modal';

// products component for Basket page
const Products = () => {

    // alert class and text state
    const [alertClass, setAlertClass] = useState('alert');
    const [alertText, setAlertText] = useState('');

    // alert component
    const alert = <Alert class={alertClass} text={alertText} />

    // redux basket data state 
    let basketData = useSelector(state => state.basketReduce);

    // give local storage and pass in to the variable
    let allData = JSON.parse(localStorage.getItem('basketDataLocal'));

    // checkout length of the alldata variable
    const [checkBasket] = useState(allData.length)

    // this state for can't access to the button
    const [removeBtnClass] = useState('disabled');

    // conditional rendering if checkbasket is not null
    if (checkBasket != 0) {
        // give alldata to basketdata
        basketData = allData;

        // map basketdata
        let mapped = basketData.map(n => <ProductsItem src={n.image} alt={n.title} link={n.id} key={n.id} title={n.title} price={n.price} counter={n.counter} total={((n.price) * (n.counter)).toFixed(2)} addClass={n.counter <= 0 ? removeBtnClass : null} removeClass={n.counter <= 1 ? removeBtnClass : null} addItem={() => addHandler(n.id)} removeItem={() => removeHandler(n.id)} removeBasketItem={() => removeBasketHandler(n.id)} />)

        // show map state
        const [showData, setShowData] = useState([]);

        // total state
        const [totalPrice, setTotalPrice] = useState('0');

        useEffect(() => {
            // conditional rendering if basketdata is not null
            if (basketData.length > 0) {
                // set mapped to showdata state
                setShowData(mapped);

                // set total price to totalprice
                setTotalPrice(basketData.map(x => (x.price) * (x.counter)).reduce((total, number) => total + number).toFixed(2))
            }
            else {
                // create modal is basketdata is empty
                mapped = <Modal text='Your basket is empty.' link='/products' btntext='Go shopping' />

                // set total price to zero
                setTotalPrice('0');

                // set mapped to showdata state
                setShowData(mapped);
            }
        }, [])

        // successfull alert function
        const successfullAlert = (alertText) => {
            // set alert class and text and remove alert class after 3 seconds
            setAlertClass('alert show-alert success');
            setAlertText(alertText)
            setTimeout(() => {
                if (alert != null) {
                    setAlertClass('alert')
                }
            }, 3000);
        }

        // remove completely item function
        const removeBasketHandler = (id) => {
            // give basketdata to newdata variable
            let newdata = [...basketData];

            // check the newdata and get items without current id to remove current item
            basketData = newdata.filter(x => x.id != id);

            // save basketdata in to localstorage
            localStorage.setItem('basketDataLocal', JSON.stringify(basketData));

            // conditional rendering if basketdata is not null
            if (basketData.length != 0) {
                // map basketdata
                mapped = basketData.map(n => <ProductsItem src={n.image} alt={n.title} link={n.id} key={n.id} title={n.title} price={n.price} counter={n.counter} total={((n.price) * (n.counter)).toFixed(2)} addClass={n.counter <= 0 ? removeBtnClass : null} removeClass={n.counter <= 1 ? removeBtnClass : null} addItem={() => addHandler(n.id)} removeIremoveItem={() => removeHandler(n.id)} removeBasketItem={() => removeBasketHandler(n.id)} />)

                // set mapped to showdata state
                setShowData(mapped);

                // create successfull alert
                successfullAlert('Successfully removed from basket');

                // set total price to totalprice
                setTotalPrice(basketData.map(x => (x.price) * (x.counter)).reduce((total, number) => total + number).toFixed(2));
            }
            else {
                // create modal is basketdata is empty
                mapped = <Modal text='Your basket is empty.' link='/products' btntext='Go shopping' />

                // set mapped to showdata state
                setShowData(mapped)
            }
        }

        // add item function
        const addHandler = (id) => {
            // give basketdata to newdata variable
            let newdata = [...basketData];

            // check the newdata and get items with current
            let singleItem = newdata.filter(x => x.id == id)

            // conditional rendering if counter of this singleitem is greater than 1
            if (singleItem[0].counter >= 1) {
                // get index of item in newdata and pass it to productID
                const productID = newdata.findIndex(x => x.id === id);

                // increase counter + 1
                singleItem[0].counter = singleItem[0].counter + 1;

                // change current item data
                newdata[productID] = singleItem[0];

                // give newdata to basketdata
                basketData = newdata;

                // save basketdata in to localstorage
                localStorage.setItem('basketDataLocal', JSON.stringify(basketData));
                
                // map basketdata
                mapped = basketData.map(n => <ProductsItem src={n.image} alt={n.title} link={n.id} key={n.id} title={n.title} price={n.price} counter={n.counter} total={((n.price) * (n.counter)).toFixed(2)} addClass={n.counter <= 0 ? removeBtnClass : null} removeClass={n.counter <= 1 ? removeBtnClass : null} addItem={() => addHandler(n.id)} removeItem={() => removeHandler(n.id)} removeBasketItem={() => removeBasketHandler(n.id)} />)

                // set mapped to showdata state
                setShowData(mapped);

                // set total price to totalprice
                setTotalPrice(basketData.map(x => (x.price) * (x.counter)).reduce((total, number) => total + number).toFixed(2));
            }
        }

        // remove item function
        const removeHandler = (id) => {
            // give basketdata to newdata variable
            let newdata = [...basketData];

            // check the newdata and get items with current id
            let singleItem = newdata.filter(x => x.id == id);

            // conditional rendering if counter of this singleitem is greater than 1
            if (singleItem[0].counter > 1) {
                // get index of item in newdata and pass it to productID
                const productID = newdata.findIndex(x => x.id === id);

                // decrease counter - 1
                singleItem[0].counter = singleItem[0].counter - 1;

                // change current item data
                newdata[productID] = singleItem[0];

                // give newdata to basketdata
                basketData = newdata;

                // save basketdata in to localstorage
                localStorage.setItem('basketDataLocal', JSON.stringify(basketData));

                // map basketdata
                mapped = basketData.map(n => <ProductsItem src={n.image} alt={n.title} link={n.id} key={n.id} title={n.title} price={n.price} counter={n.counter} total={((n.price) * (n.counter)).toFixed(2)} addClass={n.counter <= 0 ? removeBtnClass : null} removeClass={n.counter <= 1 ? removeBtnClass : null} addItem={() => addHandler(n.id)} removeItem={() => removeHandler(n.id)} removeBasketItem={() => removeBasketHandler(n.id)} />)

                // set mapped to showdata state
                setShowData(mapped)
                
                // set total price to totalprice
                setTotalPrice(basketData.map(x => (x.price) * (x.counter)).reduce((total, number) => total + number).toFixed(2));
            }
        }

        return (
            <>
                <section className='section-gap container basketPage_products'>
                    {showData}
                    <div>
                        <div>
                            <span>Total:</span>
                            <span>${totalPrice}</span>
                        </div>
                        <div>
                            <Link href='/products'><button>Continue shopping</button></Link>
                            <Link href='/checkout'><button>Make order</button></Link>
                        </div>
                    </div>
                </section>
                {alert}
            </>
        )
    }
    else {
        return (
            <Modal divclass='info' icon='fa fa-info' title='Information!' buttonclass='info' text='Your basket is empty.' link='/products' btntext='Go shopping' />
        )
    }
}
export default Products
