import React from 'react';
import Link from 'next/link';

// this is offer component of home page
const Offer = () => {
    return (
        <section className='home_offer'>
            <span>Exclusive Hot Deal Ends Soon!</span>
            <p>Who are in extremely love with eco friendly system.</p>
            <Link legacyBehavior href='/products'>
                <a>Shop Now</a>
            </Link>
        </section>
    )
}

export default Offer
