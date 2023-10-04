import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { BsWhatsapp } from "react-icons/bs";
import SearchBar from "../../SearchBar";
import SearchResultsList from "../../SearchResultsList";

const WpHeader = () => {
  const [stickyClass, setStickyClass] = useState("");
  const [filterState, setFilterState] = useState(false);
  console.log(filterState);
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
  const [results, setResults] = useState([]);
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
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
          </nav>
        </div>

        <a
          href="/"
          className="hidden xl:flex lg:flex md:flex sm:hidden justify-center items-center my-auto w-[24%] text-[#FFFEFA] bg-[#454545] hover:text-white hover:bg-stone-500 focus:outline-none focus:ring-4 focus:ring-[#FFFEFA] font-bold rounded-full text-medium px-6 py-3 text-center mr-2 "
          rel="noreferrer"
        >
          Home{" "}
          <span>
            <HiChevronDoubleLeft className="inline" />
          </span>
        </a>
      </div>
    </header>
  );
};

export default WpHeader;
