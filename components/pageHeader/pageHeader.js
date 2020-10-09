import React from 'react'

// page header component
const PageHeader = (props) => {
    return (
        <header className='pageHeader'>
            <h2 className='container'><i className="fa fa-file-text-o" aria-hidden="true"></i>{props.title}</h2>
        </header>
    )
}

export default PageHeader
