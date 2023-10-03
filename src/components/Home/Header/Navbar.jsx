import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { BsWhatsapp } from "react-icons/bs";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      if (windowHeight > 100) {
        document.getElementById("navbar").classList.add("sticky");
        setStickyClass("fixed");
      } else {
        setStickyClass("");
      }
    }
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <header
      className={`text-gray-400 bg-white drop-shadow-2xl w-full body-font ${stickyClass} z-50`}
      id="navbar"
    >
      <div className="mx-auto flex items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 xl:ml-24 lg:ml-24 md:ml-4 "
        >
          <img className="w-[50%] m-2" src={logo} alt="logo" />
        </Link>
        <div className=" md:ml-auto hidden xl:flex lg:flex md:flex sm:hidden w-[90%] xl:w-[90%] lg:w-[90%] md:w-[94%] justify-center items-center">
          <nav className="flex flex-wrap items-center text-base justify-center">
            <a
              href="https://app.toolsfix.net/signup"
              className="mr-4 text-base font-semibold cursor-pointer p-2 text-[#454545] hover:text-stone-500 hover:border-b-2 hover:border-stone-500"
              id="btn"
            >
              Buy Subscriptions
            </a>
            <a
              href="https://app.toolsfix.net/member"
              className=" mr-2 text-base font-semibold cursor-pointer p-2 text-[#454545] hover:text-stone-500 hover:border-b-2 hover:border-stone-500"
              id="btn"
            >
              Member Area
            </a>
            <Link
              to="/youtubeMonetization"
              className=" mr-2 text-base font-semibold cursor-pointer p-2 text-[#454545] hover:text-stone-500 hover:border-b-2 hover:border-stone-500"
              id="btn"
            >
              Youtube Monetization
            </Link>
            <Link
              to="/wp"
              className=" mr-2 text-base font-semibold cursor-pointer p-2 text-[#454545] hover:text-stone-500 hover:border-b-2 hover:border-stone-500"
              id="wp"
            >
              WordPress Plugins & Themes
            </Link>
            {/*<a target="_blank" href="https://wa.me/923218043010"*/}
            {/*   className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-medium px-8 py-4 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"*/}
            {/*   rel="noreferrer"*/}
            {/*>*/}
            {/*    <BsWhatsapp className="inline" size={20}/>&nbsp;&nbsp; Chat on WhatsApp*/}
            {/*</a>*/}
            {/*<a href='https://app.toolsfix.net/signup'*/}
            {/*   className="text-[#FFFEFA] bg-[#454545] hover:text-white focus:outline-none focus:ring-4 hover:bg-stone-500 font-bold rounded-full text-medium px-8 py-4 text-center mr-2 mb-2"*/}
            {/*   rel="noreferrer"*/}
            {/*>*/}
            {/*    Signup Today <span><HiChevronDoubleRight className="inline"/></span>*/}
            {/*</a>*/}
          </nav>
        </div>

        <a
          href="https://app.toolsfix.net/signup"
          className="hidden xl:flex lg:flex md:flex sm:hidden justify-center items-center my-auto w-[24%] text-[#FFFEFA] bg-[#454545] hover:text-white hover:bg-stone-500 focus:outline-none focus:ring-4 focus:ring-[#FFFEFA] font-bold rounded-full text-medium px-6 py-3 text-center mr-2 "
          rel="noreferrer"
        >
          Signup Today{" "}
          <span>
            <HiChevronDoubleRight className="inline" />
          </span>
        </a>
        {/*<a href='https://app.toolsfix.net/signup' className="mr-2 xl:mr-16 lg:mr-16 md:mr-2 sm:mr-2 inline-flex items-center text-[#454545] bg-[#FFFEFA] border-4 border-white p-2 px-0 xl:px-5 lg:px-5 md:px-5 sm:px-0 focus:outline-none hover:text-[#FFFEFA] hover:bg-[#454545] rounded-full text-lg xl:text-xl lg:text-xl md:text-xl sm:text-lg font-semibold md:mt-0 w-[50%] xl:w-[15%] lg:w-[15%] md:w-[26%] sm:w-[51%] justify-center">*/}

        {/*</a>*/}
        <div className="flex relative">
          {toggleMenu ? (
            <AiOutlineClose
              fontSize={0}
              className="text-black md:hidden cursor-pointer"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          ) : (
            <HiMenuAlt4
              fontSize={50}
              className="text-black md:hidden cursor-pointer"
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          )}
          {toggleMenu && (
            <ul className="z-10 fixed top-0 -right-2 p-3 w-[80vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-black text-xl animate-slide-in">
              <li className="text-xl w-full my-2">
                <AiOutlineClose
                  fontSize={35}
                  className="text-black md:hidden cursor-pointer"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                />
              </li>
              <li className="my-2">
                <a
                  href="https://app.toolsfix.net/signup"
                  className="mr-4 text-base font-semibold cursor-pointer p-2"
                  id="btn"
                >
                  Buy Subscriptions
                </a>
              </li>
              <li className="my-2">
                <a
                  href="https://app.toolsfix.net/member"
                  className=" mr-2 text-base font-semibold cursor-pointer p-2"
                  id="btn"
                >
                  Member Area
                </a>
              </li>
              <li className="my-2">
                <Link
                  to="/youtubeMonetization"
                  className=" mr-2 text-base font-semibold cursor-pointer p-2"
                  id="btn"
                >
                  Youtube Monetization
                </Link>
              </li>
              {/*<li className='my-6'>*/}
              {/*    <a target="_blank" href="https://wa.me/923218043010"*/}
              {/*       className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-medium px-8 py-4 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"*/}
              {/*       rel="noreferrer"*/}
              {/*    >*/}
              {/*        <BsWhatsapp className="inline" size={20}/>&nbsp;&nbsp; Chat on WhatsApp*/}
              {/*    </a>*/}
              {/*</li>*/}
              <li className="my-6">
                <a
                  href="https://app.toolsfix.net/signup"
                  className="text-[#FFFEFA] bg-[#454545] hover:text-white focus:outline-none focus:ring-4 hover:bg-stone-500 font-bold rounded-full text-medium px-8 py-4 text-center mr-2 mb-2"
                  rel="noreferrer"
                >
                  Signup Today{" "}
                  <span>
                    <HiChevronDoubleRight className="inline" />
                  </span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
