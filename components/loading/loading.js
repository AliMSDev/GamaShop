import React from 'react'
import Head from 'next/head';

// loading component
const Loading = (props) => {
    return (
        <>
            <Head>
                <title>{`${props.title} | Gama Store`}</title>
            </Head>
            <section className='loading'>
                <div></div>
            </section>
        </>
    )
}

export default Loading
