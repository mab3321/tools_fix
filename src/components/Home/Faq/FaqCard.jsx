import React from 'react'

const FaqCard = (props) => {
    return (
        <div className="w-full xl:w-1/2 lg:w-1/2 md:w-1/2 sm:w-full p-4 flex flex-col text-justify">
            <h2 className="text-gray-900 text-xl title-font font-semibold mb-3">{props.title}</h2>
            <p className="leading-relaxed text-base text-gray-500">{props.description}</p>
        </div>
    )
}

export default FaqCard