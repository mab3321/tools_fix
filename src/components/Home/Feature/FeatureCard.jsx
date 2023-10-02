import React from 'react'

const FeatureCard = (props) => {
    return (
        <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-14 h-14 inline-flex items-center justify-center rounded-full bg-[#7e7e7e44] text-[#454545] mb-5 flex-shrink-0">
                <svg className="w-10 h-10" viewBox="-4 -4 24 24">
                    {props.icon}
                </svg>
            </div>
            <div className="flex-grow">
                <h2 className="text-gray-900 text-xl title-font font-semibold mb-3">{props.title}</h2>
                <p className="leading-relaxed text-base text-gray-500">{props.description}</p>
            </div>
        </div>
    )
}

export default FeatureCard