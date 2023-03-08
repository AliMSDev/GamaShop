import React from 'react'
import Link from 'next/link'

// This PanelItems Component
const PanelItems = (props) => {
    return (
        <li>
            <Link href={props.link} onClick={props.click}>{props.text}</Link>
        </li>
    );
}

export default PanelItems
