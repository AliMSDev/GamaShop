import React from 'react'

// title component
const Title = (props) => {
    return (
        <div className='title'>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Title
