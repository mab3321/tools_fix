import React from 'react'
import Faq from '../components/Home/Faq/Faq'
import Feature from '../components/Home/Feature/Feature'
import Footer from '../components/Home/Footer'
import GetInTouch from '../components/Home/GetInTouch'
import Navbar from '../components/Home/Header/Navbar'
import Hero from '../components/Home/Hero'
import Pricing from '../components/Home/Pricing/Pricing'
import Reason from '../components/Home/Reason'
import Review from "../components/Home/Review/Review";
import Asset from "../assets/images/Asset1.jpg"
import Panda from "../assets/images/ilovepanda.jpg"
import Slider from "../components/Home/Swiper/Slider";

const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero title="Group Buy Tools Marketplace !"
                  colorfulTitle="Cheapest"
                  titleSize="text-4xl sm:text-4xl xl:text-7xl lg:text-7xl md:text-4xl"
                  description="As a beginner marketer, freelancer, or blogger, not everyone can afford expensive and paid tools for their startup. We have introduced this service specifically to assist them by making it affordable."
                  button="flex"
                  image={Panda}
            />
            <Feature title="How It Works ?" image={Asset}/>
            <Pricing/>
            <Slider/>
            <Review/>
            <Faq/>
            <Reason/>
            <GetInTouch/>
            <Footer/>
        </>
    )
}

export default Home