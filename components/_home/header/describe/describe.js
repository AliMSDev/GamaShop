import React from 'react';

// this is describe component of header of home page
const Describe = () => {
    return (
        <section className='home_Header-describe container'>
            <div className='col-xs-12 col-s-12 col-xl-5'>
                <h2>
                    New Collection Added
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Nec dui nunc mattis enim ut tellus elementum.
                    Faucibus et molestie ac feugiat sed lectus vestibulum.
                    Porttitor lacus luctus accumsan tortor posuere.
                    Tincidunt dui ut ornare lectus sit amet est placerat.
                    Nullam eget felis eget nunc lobortis. In vitae turpis massa sed.
                    Donec massa sapien faucibus et molestie ac feugiat sed.
                    Quis viverra nibh cras pulvinar mattis nunc sed blandit.
                </p>
            </div>
            <div className='col-xs-12 col-s-12 col-xl-7'>
                <figure>
                    <img src='/Images/background-basket.png' alt='basket' />
                </figure>
            </div>
        </section>
    )
}

export default Describe
