import {MdVerified} from "react-icons/md";
import YTReview from "./YTReview";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import React from "react";
import './Customers.css'
// import Features from "./Components/Features/Features.jsx";
import SwiperCore from 'swiper';
import Customer1 from "../../../assets/images/HBAMasti.jpg"
import Customer2 from "../../../assets/images/InformativeMetaverse.jpg"
import Customer3 from "../../../assets/images/CyberSchool.jpg"
import Customer4 from "../../../assets/images/Zuraiz.jpg"

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Customers = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto w-full xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-full">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Customer Says</h1>
                    <div>
                        {/*<Features/>*/}
                        <Swiper
                            className=""
                            slidesPerView={1}
                            // navigation
                            autoplay={true}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true, // Enable dynamic pagination bullets
                            }}
                        >
                            <SwiperSlide>
                                <YTReview name="HBA Masti"
                                comment="I am a small YouTuber and I recently signed up with ToolsFix to get my channel growing. I wasn't sure at first, but now that I have grown 1000 subscribers on YouTube, I think this is a great service."
                                image={Customer1}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <YTReview name="Informative Metaverse"
                                          comment="You should definitely check Tools Fix Network out, it's a pretty useful tool for people who want to grow their YouTube channels. I was able to get 1000 subscribers within just 4 weeks thanks to this website."
                                          image={Customer2}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <YTReview name="Cyber School"
                                          comment="I was really struggling to get my YouTube channel monetized. But then I found Tools Fix and they got my channel monetized in no time! They are really easy to work with and their pricing is very affordable. I would definitely recommend them to anyone looking to get their YouTube channel monetized."
                                          image={Customer3}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <YTReview name="M Zuraiz"
                                          comment="I'm really happy with Tools Fix service. I was struggling to get 4000 watch hours on my YouTube channel. But with their help, I was able to achieve this goal in just a few weeks. The service is affordable and the team is very responsive. I would definitely recommend them to anyone looking to grow their YouTube channel."
                                          image={Customer4}/>
                            </SwiperSlide>
                        </Swiper>

                    </div>
                </div>
                <div className="text-center">
                <h1 className="title-font text-2xl sm:text-2xl xl:text-5xl lg:text-5xl md:text-3xl mb-4 font-black text-black">
                    Buy 4000 watch hours on your YouTube Channel </h1>
                {/*<hr className="w-48 h-1 mx-auto my-4 bg-[#454545] border-0 rounded md:my-10 dark:bg-gray-700"/>*/}
                <p className="my-8 leading-relaxed text-gray-500 text-lg font-bold"><MdVerified className="inline"/> With Tools Fix you can get your
                    channel monetized fast within 14 days.</p>
                <p className="my-8 leading-relaxed text-gray-500 text-lg font-bold"><MdVerified className="inline"/> Get 100% real watch hours</p>
                </div>
            </div>
        </section>
    );
};

export default Customers;
