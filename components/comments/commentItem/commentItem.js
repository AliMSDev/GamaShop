import React from 'react'

// comment item handler
const CommentItem = (props) => {
    return (
        <div>
            <div>
                <figure>
                    <img src={props.src} alt='person' />
                </figure>
                <div>
                    <span>{props.name}</span>
                    <div>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                        <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default CommentItem
