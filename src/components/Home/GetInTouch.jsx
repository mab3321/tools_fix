import React from 'react'

const GetInTouch = () => {
    return (
        <section className="text-white body-font">
            <div className='flex flex-row flex-wrap container p-4 py-4 xl:pl-16 xl:py-16 lg:pl-16 lg:py-16 md:p-6 md:py-6 sm:p-4 sm:py-4 mx-auto w-[80%] border-2 border-[#454545] rounded-lg bg-[#454545] mb-8'>
                <div className="text-justify w-full xl:w-[58%] lg:w-[58%] md:w-full sm:w-full mb-4">
                    <h1 className="text-3xl xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl font-bold title-font text-white mb-4">Important !</h1>
                    <p className="text-base leading-relaxed text-[#FFFEFA]">If You are Confused or Anyhow Hesitating to pay us. Contact the Live Chat Support & <span className='font-bold'> Ask for a Anydesk overview </span>. For More Details Contact Chat Support.</p>
                </div>
                <div className="text-justify ml-0 xl:ml-8 lg:ml-8 md:ml-0 sm:ml-0 w-full xl:w-[30%] lg:w-[30%] md:w-full sm:w-full">
                    <div className="flex w-full md:justify-start justify-center items-end text-center">
                        <a href='https://app.toolsfix.net/signup' className="ml-0 xl:ml-8 lg:ml-8 md:ml-[33%] sm:ml-0 inline-flex items-center text-[#454545] shadow-custom bg-[#FFFEFA] border-4 border-[#454545] p-4 px-8 focus:outline-none hover:scale-90 hover:border-[#FFFEFA] hover:text-[#FFFEFA] hover:bg-[#454545] rounded-full text-xl font-semibold md:mt-0">
                            Get Started Now !
                        </a>
                    </div>
                    <p className="text-base mt-2 text-[#FFFEFA] mb-4 w-full text-center">( No Payment Needed ! )</p>
                </div>
            </div>
        </section>
    )
}

export default GetInTouch