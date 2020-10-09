import React from 'react'
import Commentform from './commentform/commentform'
import CommentItem from './commentItem/commentItem'

// comment handler
const Comments = () => {
    return (
        <div className='comments'>
            <div><span>Comments</span></div>
            <div className='col-xs-12 col-s-12 col-m-6'>
                <CommentItem src='/Images/c1.png' name='Ali' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' />
                <CommentItem src='/Images/c2.png' name='Mani' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' />
                <CommentItem src='/Images/c3.png' name='Reza' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo' />
            </div>
            <div className='col-xs-12 col-s-12 col-m-6'>
                <Commentform />
            </div>
        </div>
    )
}

export default Comments
