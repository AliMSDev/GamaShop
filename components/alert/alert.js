import React from 'react'

// alert component
const Alert = (props) => {
    // hide alert function
    const clickHandler = () => {
        document.querySelector('.alert').classList.remove('show-alert');
    }
    return (
        <div className={props.class}>
            <div>
                <button onClick={clickHandler}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>
            <p>{props.text}</p>
        </div>
    )
}

export default Alert
