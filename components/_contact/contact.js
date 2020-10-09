import React from 'react'
import ContactForm from './form/form'
import ContactMap from './map/map'

// This is Contact Component
const ContactComponent = () => {
    return (
        <section className='section-gap container contact'>
            <ContactMap />
            <ContactForm />
        </section>
    )
}

export default ContactComponent
