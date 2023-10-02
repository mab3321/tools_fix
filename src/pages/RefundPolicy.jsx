import React from 'react'
import Footer from '../components/Home/Footer'
import Navbar from '../components/Home/Header/Navbar'

const RefundPolicy = () => {
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font min-h-screen">
                <div className="container px-5 py-12 mx-auto xl:px-0 lg:px-0 md:px-8 sm:px-0">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-[#454545] mb-4">Refund Policy</h1>
                    </div>
                    <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto px-5 xl:px-0 lg:px-0 md:px-0 sm:px-5 text-justify text-lg">
                        <ul role="list" className="mb-8 space-y-4 list-disc">
                            <li className="text-justify space-x-3"><a href="https://toolsfix.net" className='underline text-[#454545]'>ToolsFix</a> will initiate the refund only when any primary service/tool (Semrush, Spyfu, Ubersuggest, StoryBlocks, Quetext, Grammarly, Canva, Vista Create (Crello),  Moz Only) does not work for three or more days, and main things is some things is not available, some things is restricted in group buy. So because of that things we are not able to allow refund. </li>
                            <li className="text-justify space-x-3">We have the right to remove any tools if we are facing issues with official and for one tools we are not obliged to refund any type of package.</li>
                            <li className="text-justify space-x-3">To initiates refund process, it can take 4-5 days, user have to wait for that time period. Also payment gateway take time of 4-5 days to refund the amount. </li>
                            <li className="text-justify space-x-3">There will be no refund if your account gets ban/blocked by invalid activities and if you are using abusing words with support assistant, no type of excuse will be accepted. There will be no refund if our tool limits get ended. Users have to wait till the limit refreshes again. </li>
                            <li className="text-justify space-x-3">Moreover, the refund request without any reason (Likewise: Mind Changed, purchased accidentally etc.) will not be accepted. Such type of case lead to account suspension.</li>
                            <li className="text-justify space-x-3">To get the refund user to have put a request at Chat Support (Administration will reply under 24-48 hours). </li>
                        </ul>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}


export default RefundPolicy