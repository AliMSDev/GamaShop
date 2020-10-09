import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Loading from '../components/loading/loading';
import Head from 'next/head';

const Undefinded = () => {

    // set loading
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, []);

    if (loading) { return <Loading title='404' /> }

    else {
        return (
            <>
                <Head>
                    <title>404 | Gama Store</title>
                </Head>
                <div className='error404 container'>
                    <Link href="/">
                        <a>
                            <figure>
                                <img src='/Images/error404.jpg' alt='404' />
                            </figure>
                        </a>
                    </Link>
                </div>
            </>
        )
    }
}
export default Undefinded;
