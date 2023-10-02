
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from "react";
// import './Customers.css'
// import Features from "./Components/Features/Features.jsx";
import SwiperCore from 'swiper';
import ChatGPT from "../../../assets/images/svg/icons8-chatgpt-144.svg"
import Turnitin from "../../../assets/images/svg/turnitin-seeklogo.com.svg"
import vYond from "../../../assets/images/svg/Vyond Logo Vector.svg"
import AdobeCreative from "../../../assets/images/svg/icons8-adobe-creative-cloud-144.svg"
import Card from "./Card";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Slider = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Individual
                        Tools Subscription</h1>
                    <div>
                        {/*<Features/>*/}
                        <Swiper
                            className=""
                            slidesPerView={1}
                            navigation
                            autoplay={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true, // Enable dynamic pagination bullets
                            }}
                        >
                            <SwiperSlide>
                                <Card name="ChatGPT Plus"
                                      display="hidden"
                                      image={ChatGPT}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card name="Turnitin Instructor (with Ai Detection)"
                                      display="hidden"
                                      image={Turnitin}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card name="vYond"
                                      display="hidden"
                                      image={vYond}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card name="Adobe Creative"
                                      display="hidden"
                                      image={AdobeCreative}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card display="block"/>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                {/*<div className="text-center">*/}
                {/*    <h1 className="title-font text-2xl sm:text-2xl xl:text-5xl lg:text-5xl md:text-3xl mb-4 font-black text-black">*/}
                {/*        Buy 4000 watch hours on your YouTube Channel </h1>*/}
                {/*    /!*<hr className="w-48 h-1 mx-auto my-4 bg-[#454545] border-0 rounded md:my-10 dark:bg-gray-700"/>*!/*/}
                {/*    <p className="my-8 leading-relaxed text-gray-500 text-lg font-bold"><MdVerified*/}
                {/*        className="inline"/> With Tools Fix you can get your*/}
                {/*        channel monetized fast within 14 days.</p>*/}
                {/*    <p className="my-8 leading-relaxed text-gray-500 text-lg font-bold"><MdVerified*/}
                {/*        className="inline"/> Get 100% real watch hours</p>*/}
                {/*</div>*/}
            </div>
        </section>
    );
};

export default Slider;
