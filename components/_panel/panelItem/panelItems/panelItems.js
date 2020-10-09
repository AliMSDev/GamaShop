import React from 'react'
import Link from 'next/link'

// This PanelItems Component
const PanelItems = (props) => {
    return (
        <li>
            <Link href={props.link}><a onClick={props.click}>{props.text}</a></Link>
        </li>
    )
}

export default PanelItems
