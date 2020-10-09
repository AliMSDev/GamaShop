import React from 'react'

// this is work item of work component of home page
const WorkItems = (props) => {
    return (
        <div className='col-xs-12 col-s-6 col-l-3'>
            <i className={props.icon} aria-hidden="true"></i>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default WorkItems
