import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import Alert from '../../alert/alert';

const ProductsDetails = (props) => {

    // alert class and text state
    const [alertClass, setAlertClass] = useState('alert');
    const [alertText, setAlertText] = useState('');

    // alert component
    const alert = <Alert class={alertClass} text={alertText} />

    // conditional rendering if productDetails data is not undefined then return this component
    if (props.productDetails != undefined) {

        // redux basket data state 
        let basketData = useSelector(state => state.basketReduce);

        // give basketDataLocal local storage data to alldata
        let allData = JSON.parse(localStorage.getItem('basketDataLocal'));

        // give alldata to basketdata
        basketData = allData;

        // give productDetails to singleProduct
        const singleProduct = props.productDetails;

        // check item in redux store
        let checkBasket = allData.some(n => n.id === singleProduct.id);

        // give item from basketData and pass it to newsingleProduct
        const newsingleProduct = basketData.filter(x => x.id == singleProduct.id);

        // add or remove btn text state
        const [addremoveBtn, setAddremoveBtn] = useState('');

        // counter state
        const [counter, setCounter] = useState(0);

        // currentPrice state
        const [currentPrice, setCurrentPrice] = useState(0);

        // removeBtnClass state 
        const [removeBtnClass] = useState('disabled');

        useEffect(() => {
            // conditional rendering if checkbasket is true or item is in basket then set counter and currentPrice and addorremoveBtn 
            if (checkBasket) {
                setCounter(newsingleProduct[0].counter);
                setCurrentPrice(((singleProduct.price) * (newsingleProduct[0].counter)).toFixed(2));
                setAddremoveBtn('Remove from basket');
            }

            // conditional rendering if checkbasket is false or item is not in basket then set counter and currentPrice to 0 and addremoveBtn 
            else {
                setCounter(0);
                setCurrentPrice(0);
                setAddremoveBtn('Add to basket');
            }
        }, []);

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

        // addremoveHander function to add or remove item
        const addremoveHandler = () => {
            // give basketDataLocal local storage data to alldata
            allData = JSON.parse(localStorage.getItem('basketDataLocal'));

            // check item in allData local storage
            checkBasket = allData.some(n => n.id === singleProduct.id);

            // give basketData to newdata variable
            let newdata = [...basketData];

            // conditional rendering if checkbasket is true or item is in basket then set counter and currentPrice to 0 and addremoveBtn and show successful alert and save item in local storage         
            if (checkBasket) {
                basketData = newdata.filter(x => x.id != singleProduct.id)
                localStorage.setItem('basketDataLocal', JSON.stringify(basketData));
                successfullAlert('Successfully removed from basket');
                setCurrentPrice(0);
                setCounter(0);
                setAddremoveBtn('Add to basket');
            }

            // conditional rendering if checkbasket is false or item is not in basket then set counter and currentPrice and addremoveBtn and show successfull alert and save item in local storage
            else {
                newdata.push({ ...singleProduct, counter: 1 });
                basketData = newdata;
                localStorage.setItem('basketDataLocal', JSON.stringify(basketData));
                successfullAlert('Successfully added to the basket');
                setCurrentPrice(singleProduct.price);
                setCounter(1);
                setAddremoveBtn('Remove from basket');
            }
        }

        // additemHandler function
        const addHandler = () => {
            // conditional rendering if item is in basket
            if (counter >= 1) {
                // give basketData to newdata variable
                let newdata = [...basketData];

                // give item from basketData and pass it to newSingleData varibale
                let newSingleData = newdata.filter(x => x.id == singleProduct.id);

                // give newsingleData counter and + 1
                newSingleData[0].counter = counter + 1;

                // give other data from newdata and pass it to newotherData variable
                let newotherData = newdata.filter(x => x.id != singleProduct.id)

                // push newsingleData with new counter and pass it to newotherData variable
                newotherData.push(...newSingleData);

                // give newotherData to basketData
                basketData = newotherData;

                // save BasketData to localStorage
                localStorage.setItem('basketDataLocal', JSON.stringify(basketData));

                // setcounter to counter + 1
                setCounter(counter + 1);

                // set new currentPrice
                setCurrentPrice(((singleProduct.price) * (counter + 1)).toFixed(2));
            }
        }

        // removeHandler function
        const removeHandler = () => {
            // conditional rendering if item is in basket and counter is greater than 1
            if (counter > 1) {
                // give basketData to newdata variable
                let newdata = [...basketData];

                // give item from basketData and pass it to newSingleData varibale
                let newSingleData = newdata.filter(x => x.id == singleProduct.id);

                // give newsingleData counter and - 1
                newSingleData[0].counter = counter - 1;

                // give other data from newdata and pass it to newotherData variable
                let newotherData = newdata.filter(x => x.id != singleProduct.id)

                // push newsingleData with new counter and pass it to newotherData variable
                newotherData.push(...newSingleData);

                // give newotherData to basketData
                basketData = newotherData;

                // save BasketData to localStorage
                localStorage.setItem('basketDataLocal', JSON.stringify(basketData));

                // setcounter to counter - 1
                setCounter(counter - 1);

                // set new currentPrice
                setCurrentPrice(((singleProduct.price) * (counter - 1)).toFixed(2));
            }
        }
        return (
            <>
                <section className='container singleProducts_productsDetails'>
                    <div className='col-xs-12 col-s-12 col-l-6 singleProducts_productsDetails_image'>
                        <figure>
                            <img src={props.productDetails.image} alt={props.productDetails.title} />
                        </figure>
                    </div>
                    <div className='col-xs-12 col-s-12 col-l-6 singleProducts_productsDetails_details'>
                        <div>
                            <h3>{props.productDetails.title}</h3>
                            <h4>${props.productDetails.price}</h4>
                            <h5>Category: <Link href={`/products/category/${props.productDetails.category}`}><a> {props.productDetails.category}</a></Link></h5>
                            <h5>Availibility: In Stock</h5>
                        </div>
                        <span className='lineBreak'></span>
                        <p>
                            {props.productDetails.description}
                        </p>
                        <div>
                            <div>
                                <span>Quantity: </span><span>{counter}</span>
                                <div>
                                    <button onClick={addHandler} className={counter <= 0 ? removeBtnClass : null}>+</button>
                                    <button onClick={removeHandler} className={counter <= 1 ? removeBtnClass : null}>-</button>
                                </div>
                            </div>
                            <div>
                                <span>${currentPrice}</span>
                            </div>
                        </div>
                        <div>
                            <button onClick={addremoveHandler}>{addremoveBtn}</button>
                            <Link href='/basket'><button>See your basket</button></Link>
                        </div>
                    </div>
                </section>
                {alert}
            </>
        )
    }
}
export default ProductsDetails
