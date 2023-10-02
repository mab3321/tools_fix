import React from 'react'
import { BiCheck } from 'react-icons/bi';

const Service = (props) => {
    return (
        <li className="flex items-center space-x-3">
            <span className="text-green-500 text-2xl"><BiCheck /></span>
            <span>{props.title}</span>
        </li>
    )
}

export default Service