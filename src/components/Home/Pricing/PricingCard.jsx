import React from 'react'
import Service from './Service'

const PricingCard = (props) => {
    return (
        <div className={`flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg shadow white:border-gray-600 xl:p-8 white:bg-gray-800 white:text-white border w-full ${props.styles}`}>

            <span className={`text-white bg-[#FB0C60] font-bold rounded-full py-2 mx-auto text-center text-lg shadow-custom border-black border-1 ${props.display}`}>{props.offer}</span>

            <span className="text-white bg-[#454545] font-bold rounded-full py-2 w-full lg:w-full md:w-[80%] mx-auto text-center text-lg shadow-custom border-black border-1">{props.title}</span>
            <img src={props.image} className="w-full mx-auto mt-12"/>
            <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">{props.amount}</span>
                <span className="text-gray-500 white:text-gray-400">{props.duration}</span>
            </div>
            <ul role="list" className="mb-8 space-y-4 text-left">
                {props.service.length > 0 && props.service.map((item) => (
                    <Service title={item} key={item} />
                ))}

            </ul>
            <a href={props.link} className="text-white hover:text-[#454545] bg-[#454545] hover:bg-white  font-bold rounded-full py-3 w-full lg:w-[85%] ml-0 lg:ml-[8%] text-center text-lg white:text-white hover:shadow-custom hover:border-[#454545] border-4">Get Started Now</a>
        </div>
    )
}

export default PricingCard