import React from 'react'

// pagination component
const Pagination = (props) => {
    return (
        <button onClick={props.click} id={props.idName} className={props.class}>{props.page}</button>
    )
}

export default Pagination
