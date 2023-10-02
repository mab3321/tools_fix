import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font mt-auto">
            <div className="bg-[#454545] flex flex-col justify-center items-center text-center">
                <nav className="flex flex-wrap mx-16 p-6 justify-center items-center cursor-pointer">
                    <Link to="/" className="text-[#FFFEFA] hover:text-white mx-4 text-lg">Home</Link>
                    <Link to="/privacy" className="text-[#FFFEFA] hover:text-white mx-4 text-lg">Privacy Policy</Link>
                    <Link to="/refund" className="text-[#FFFEFA] hover:text-white mx-4 text-lg">Refund Policy</Link>
                    <Link to="/e2ee" className="text-[#FFFEFA] hover:text-white mx-4 text-lg">E2EE Policy</Link>
                    <Link to='/youtubeMonetization' className="text-[#FFFEFA] hover:text-white mx-4 text-lg">Youtube Monetization</Link>
                </nav>
                <div className="w-1/2 h-[1px] bg-[#FFFEFA] rounded mb-12"></div>
                <p className="text-[#FFFEFA] text-base mb-6 text-center sm:text-left">Copyright © 2023 | All Rights Reserved by <a href="https://toolsfix.net" className='underline text-white'>ToolsFix</a>.</p>
            </div>
        </footer>
    )
}

export default Footer