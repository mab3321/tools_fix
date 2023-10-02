import React from 'react'
import Navbar from '../components/Home/Header/Navbar'
import Footer from '../components/Home/Footer';

const E2EEPolicy = () => {
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font min-h-screen">
                <div className="container px-5 py-12 mx-auto xl:px-0 lg:px-0 md:px-5 sm:px-0">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-[#454545] mb-4">E2EE Policy</h1>
                    </div>
                    <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto text-justify mb-12">
                        <p className="leading-relaxed text-lg">End-to-end encryption is designed to stop data from being altered or read in any way other than by the original sending party and recipient(s).The data is encrypted by genuine encryption technology. However, the third party doesn’t have the capability of decrypting them.And keeps them in a secure location. Users retrieve the encrypted data and then decrypt it themselves.
                        </p>
                    </div>
                    <div className="text-start mb-4 ml-0 xl:ml-[155px] lg:ml-[155px] md:ml-0 sm:ml-0">
                        <h3 className="text-xl xl:text-2xl lg:text-2xl md:text-2xl sm:text-xl font-bold title-font text-[#454545]">At Tools Fix Network</h3>
                    </div>
                    <div className="xl:w-3/4 lg:w-3/4 w-full mx-auto text-justify">
                        <p className="leading-relaxed text-lg">
                            Here at <a href="https://toolsfix.net" className='underline text-[#454545]'>ToolsFix</a>, we also employ E2EE based on proper encryption technology. For the first time, we’ve introduced this technology in the market of Group Buy Services,
                            <a href="https://toolsfix.net" className='underline text-[#454545]'>ToolsFix</a> introduced this technology that keeps all information secure between the user and the official tool websites.
                            Any third party on our server or outside cannot access or modify the data.
                            Like Semrush, Quetext, and Article Rewriter, the stored data is protected with top-of-the-line technology to ensure no one can access or steal user data.

                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default E2EEPolicy