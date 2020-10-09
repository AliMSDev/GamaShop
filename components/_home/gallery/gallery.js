import React from 'react'

// this is gallery component of home page
const Gallery = () => {
    return (
        <section className='home_gallery container section-gap'>
            <div className='col-xs-12 col-s-12 col-m-8'>
                <div className='col-xs-12 col-s-12 col-m-8'>
                    <figure>
                        <img src='/Images/g1.jpg' alt='gallery images' />
                    </figure>
                </div>
                <div className='col-xs-12 col-s-12 col-m-4'>
                    <figure>
                        <img src='/Images/g2.jpg' alt='gallery images' />
                    </figure>
                </div>
                <div className='col-xs-12 col-s-12 col-m-4'>
                    <figure>
                        <img src='/Images/g3.jpg' alt='gallery images' />
                    </figure>
                </div>
                <div className='col-xs-12 col-s-12 col-m-8'>
                    <figure>
                        <img src='/Images/g4.jpg' alt='gallery images' />
                    </figure>
                </div>
            </div>
            <div className='col-xs-12 col-s-12 col-m-4'>
                <div>
                    <figure>
                        <img src='/Images/blackFriday.jpg' alt='black friday' />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Gallery
