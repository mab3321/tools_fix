import React from 'react'
import FaqCard from './FaqCard'

const Faq = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pt-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">FAQ's</h1>
                </div>
                <div className="flex flex-row xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row flex-wrap sm:flex sm:flex-col sm:flex-wrap px-0 xl:px-16 lg:px-16 md:px-16 sm:px-0 w-full">
                    <FaqCard
                        title="What Would Be The Access Mode?"
                        description="We are currently offering Access through extension, you will have to download our extension and install it in chrome. Access guide has been provided in Member Dashboard."
                    />
                    <FaqCard
                        title="Do Your Offer Refunds ?"
                        description="Not at All , We only & Only Refund if our tools don’ t work or more than 72 Hours. Make sure to clear everything from the Live Chat Support Before Buying Anything. Read our Refund Policy For More Info."
                    />
                    <FaqCard
                        title="Can I Use My Tool On Office As Well?"
                        description="As security Reason, we allow only Single IP at a time . You can use it on Multiple Devices ( Not too Frequently ) but ISP Should be the Same at a time. Other wise, You will get banned. Still our team will always there for Any support."
                    />
                    <FaqCard
                        title="Can I Share My Account?"
                        description="No, We don’t allow account sharing. Single Account for single user. If you shared your account with someone, Our system will autoblock your Account."
                    />
                </div>
            </div>
        </section>
    )
}

export default Faq