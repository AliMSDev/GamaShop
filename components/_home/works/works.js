import React from 'react'
import WorkItems from './workItems/workItems'

// this is work component of home page
const Works = () => {
    return (
        <section className='home_works container section-gap'>
            <WorkItems icon='fa fa-truck' title='Free Delivery' text='Free shipping on all order' />
            <WorkItems icon='fa fa-exchange' title='Return Policy' text='Free shipping on all order' />
            <WorkItems icon='fa fa-headphones' title='24/7 Support' text='Free shipping on all order' />
            <WorkItems icon='fa fa-clone' title='Secure Payment' text='Free shipping on all order' />
        </section>
    )
}

export default Works
