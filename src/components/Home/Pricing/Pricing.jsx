import React, {useState} from 'react'
import PricingCard from './PricingCard'
import {IoTrophy} from 'react-icons/io5'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup';
import Bamboo from '../../../assets/images/bambooDeal.png'
import Service from "./Service";
import {BiCheck, BiCircle} from "react-icons/bi";
// import 'reactjs-popup/dist/index.css';
// import './Pricing.css';
const Pricing = () => {
    const [currency, setCurrency] = useState('PKR'); // default currency is PKR
    const currencyOptions = [
        {name: 'PKR', values: ["1,350 Rs", "1,500 Rs", "1,250 Rs"]},
        {name: 'INR', values: ["390 Inr", "430 Inr", "360 Inr"]},
    ];

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    }
    return (
        <section className="bg-white white:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-20">
                <div className="text-center mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Pricing
                        & Plan</h1>
                    <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">( That Fits Your
                        Needs )</p>
                    <Popup open={isOpen} onClose={handleClose} closeOnDocumentClick overlayStyle={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: '1000'
                    }}>
                        <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
                                <h2 className="text-lg font-medium text-gray-800">Choose your currency</h2>
                                <button className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                        onClick={handleClose}>
                                    <IoMdClose size="28"/>
                                </button>
                            </div>
                            <div className="px-6 py-4 text-center">
                                <select
                                    className="w-full p-2 border rounded"
                                    value={currency}
                                    onChange={handleCurrencyChange}
                                >
                                    {currencyOptions.map((option, index) => (
                                        <option key={index} value={option.name}>
                                            {option.name}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    className="mt-4 bg-[#454545] hover:bg-[#606060] text-white font-bold py-2 px-4 rounded"
                                    onClick={handleClose}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </Popup>

                    <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">
                        Choose your currency here
                        <select value={currency} onChange={handleCurrencyChange}
                                className="cursor-pointer bg-white ml-3 border-[1px] border-gray-500 px-4 py-2 text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4">
                            {currencyOptions.map((option, index) => (
                                <option key={index} value={option.name}
                                        className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-4">
                                    {option.name}
                                </option>
                            ))}
                        </select>
                    </p>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-8 lg:space-y-0 relative">
                    <PricingCard
                        title="Blogging Package"
                        display="hidden"
                        amount={currencyOptions.find((option) => option.name === currency).values[0]}
                        duration="/month"
                        link="https://app.toolsfix.net/signup"
                        styles="border-[#454545]"
                        service={["S*mrush", "Instr0id ( Plagiarism & Ai )", "M@ngools", "Word Ai", "Rytr.me", "WordTune", "p*k To Chart", "Uber-Suggest", "Serp-stat", "Storybase", "Woo-Rank", "Article Forge (Under Testing)", "Grammerly", "Canva", "Scribd", "Amaz0n Prime", "Pluralsight", "SkillShare", "ClosersCopy (Under Testing)", "SEO Site Checkup", "Switchy.io (Testing New !)", "Jasper (Under Testing)", "pikMonkey", "Quill Bot", "SEOptimer", "MOZ Pro", "Word Hero", "HelloScribe (NEW TOOL!)", "Reword IO (HOT NEW!)", "Vimeo Video", "Icons 8", "AI Image Generator", "Get Voice Artist", "Coming Soon*"]}
                    />
                    <PricingCard
                        title="All in One Package"
                        display="absolute bottom-[3840px] w-[58%] left-[20%] xl:bottom-[99%] lg:bottom-[99%] md:bottom-[3018px] sm:bottom-[3840px] xl:w-[19%] lg:w-[19%] md:w-[38%] sm:w-[58%] xl:left-[452px] lg:left-[452px] md:left-[234px] sm:left-[20%]"
                        icon={<IoTrophy/>}
                        offer="Most Popular"
                        amount={currencyOptions.find((option) => option.name === currency).values[1]}
                        duration="/month"
                        styles="border-white shadow-custom"
                        link="https://app.toolsfix.net/signup"
                        service={["Moz Pro", "Story Block", "S*mrush", "Motion Arry ", "Envato Element", "ManG!ools", "Placeit", "Rytr.me ( Testing tool)", "Article Forge (Under Testing)", "De$igns AI", "PikMonk*y", "Quill Bot", "Creatopy", "SEOptimer", "ClosersCopy (Under Testing)", "SEO Site Checkup", "Switchy.io (Testing New !)", "Word Ai", "Instr0id ( Plagiarism & Ai )", "P*k To chart", "In-Video", "Powtoon", "WordTune", "Epidemic - Sounds", "UberSuggest", "Grammerly", "Serp-stat", "StoryBase", "Woo-Rank", "Magisto", "Skill Share", "PluralSight", "Scribd", "Crello", "Canva", "Amaz0n Prime", "PicsArt", "Renderforest", "Word Hero", "HelloScribe (NEW TOOL!)", "Reword IO (HOT NEW!)", "Vimeo Video", "Icons 8", "AI Image Generator", "Get Voice Artist", "Vecteezy Testing", "Design Beast App", "TypeForm", "Visme", "Coming soon*"]}
                    />
                    <PricingCard
                        title="Designers Package"
                        display="hidden"
                        amount={currencyOptions.find((option) => option.name === currency).values[2]}
                        duration="/month"
                        styles="border-[#454545]"
                        link="https://app.toolsfix.net/signup"
                        service={["Story Block", "Envato Element", "Motion Arry ", "Powtoon", "Magisto", "In Video", "Epidemic-Sounds", "Grammerly", "Pik To Chart", "Placit", "De$igns AI", "PikMonkey", "Renderforest", "Creatopy", "Pics Art", "Skill Share", "PluralSight", "Crello", "Canva", "Amaz0n Prime", "Vimeo Video", "Icons 8", "AI Image Generator", "Get Voice Artist", "Vecteezy Testing", "Design Beast App", "TypeForm", "Visme", "Comming Soon*"]}
                    />
                    {/*<PricingCard*/}
                    {/*    title="6 Month Package"*/}
                    {/*    display="hidden"*/}
                    {/*    // amount={currencyOptions.find((option) => option.name === currency).values[2]}*/}
                    {/*    // duration="/month"*/}
                    {/*    image={Bamboo}*/}
                    {/*    styles="border-[#454545]"*/}
                    {/*    link="https://app.toolsfix.net/content/p/id/69/"*/}
                    {/*    service={["1 month Vyond Premium (790 PKR) - FREE", "6 month ChatGPT Plus - FREE", "6 Nichess (Ai writing Tool)","1 Month Turnitin Instructor (1,500 PKR) - FREE","Free access to any bonuses we add in the future"]}*/}
                    {/*/>*/}

                </div>
                <div
                    className={`flex flex-col p-6 mx-auto max-w-6xl mt-8 text-center text-gray-900 bg-white rounded-lg shadow white:border-gray-600 xl:p-8 white:bg-gray-800 white:text-white border w-full border-[#454545]`}>
                    <span
                        className="text-white bg-[#454545] font-bold rounded-full py-2 w-full xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full mx-auto text-center text-lg shadow-custom border-black border-1">6 Month Package</span>
                    <img src={Bamboo} className="w-full xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full mx-auto mt-12"/>
                    <ul role="list" className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                            <span className="text-green-500 text-2xl"><BiCheck/></span>
                            <span className="font-bold">All in One</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="text-green-500 text-2xl"><BiCheck/></span>
                            <span>Original price for 6 month : 9,000 PKR</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="text-green-500 text-2xl"><BiCheck/></span>
                            <span>One Month Free ( -1500 Pkr )</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="text-green-500 text-2xl"><BiCheck/></span>
                            <span>10% Off ( -750 pkr )</span>
                        </li>
                        <li className="flex items-center space-x-3">
                            <span className="text-green-500 text-2xl"><BiCheck/></span>
                            <span>Price After Discount: 6,750 PKR</span>
                        </li>
                        <li className="items-center space-x-3">
                            <span className="text-green-500 text-2xl"><BiCheck className="inline"/></span>
                            <span className="font-bold">Bonuses Included:</span>
                            <ul role="list" className="mt-4 space-y-4 text-left">
                                <li className="flex items-center space-x-3">
                                    <span className="text-green-500 text-2xl"><BiCircle size={16}
                                                                                        className="text-red-800"/></span>
                                    <span>1 month Vyond Premium (790 PKR) - FREE</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-green-500 text-2xl"><BiCircle size={16}
                                                                                        className="text-red-800"/></span>
                                    <span>6 month ChatGPT Plus - FREE</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-green-500 text-2xl"><BiCircle size={16}
                                                                                        className="text-red-800"/></span>
                                    <span>6 Nichess (Ai writing Tool)</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-green-500 text-2xl"><BiCircle size={16}
                                                                                        className="text-red-800"/></span>
                                    <span>1 Month Turnitin Instructor (1,500 PKR) - FREE</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <span className="text-green-500 text-2xl"><BiCircle size={16}
                                                                                        className="text-red-800"/></span>
                                    <span>Free access to any bonuses we add in the future</span>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <a href="https://app.toolsfix.net/content/p/id/69/"
                       className="text-white hover:text-[#454545] bg-[#454545] hover:bg-white font-bold rounded-full py-3 w-full xl:w-1/4 lg:w-1/4 md:w-1/4 sm:w-full mx-auto text-center text-lg white:text-white hover:shadow-custom hover:border-[#454545] border-4">Get
                        Started Now</a>
                </div>
            </div>
        </section>
    )
}

export default Pricing