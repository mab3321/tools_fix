import React from "react";
import Navbar from "../components/Home/Header/Navbar";
import Footer from "../components/Home/Footer";
import WPHero from "../components/wpPluginsAndThemes/WPHero";
import Asset from "../assets/images/Asset2.jpg";
import Feature from "../components/Home/Feature/Feature";
import FAQ from "../components/YoutubeMonetization/FAQ";
import Customers from "../components/YoutubeMonetization/CustomerSays/Customers";
import Hero from "../components/Home/Hero";
import Asset1 from "../assets/images/Asset17.jpg";
import Asset2 from "../assets/images/Asset14.png";
import Asset3 from "../assets/images/Asset3.png";

const WpPluginsThemes = () => {
  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font min-h-screen">
        <div className="container px-5 py-12 mx-auto xl:px-0 lg:px-0 md:px-5 sm:px-0">
          <WPHero />
          <Feature title="How It Works ?" image={Asset} />
          <Hero
            title="Word Press Plugins"
            colorfulTitle="Word Press Plugins "
            titleSize="text-2xl sm:text-2xl xl:text-5xl lg:text-5xl md:text-2xl"
            description="Are you seeking effective strategies to increase your YouTube channel's view time and subscribers? Look no further! At Tools Fix Network, we specialize in providing top-notch YouTube monetization services. Our team will help you reach millions of users, increasing your chances of launching a successful viral campaign. We also focus on branding your channel to ensure favorable visibility for your YouTube videos."
            button="hidden"
            image={Asset1}
          />
          <Hero
            title="Services - Enhance Your Subscriber Count"
            colorfulTitle="Premier YouTube Monetization "
            titleSize="text-2xl sm:text-2xl xl:text-5xl lg:text-5xl md:text-2xl"
            description="Partnering with us for YouTube monetization services guarantees you the maximum number of subscribers. We develop strategies that comply with YouTube's policies, enabling you to deliver compelling content and attract a larger subscriber base. Our YouTube channel monetization services offer customizable packages tailored to your specific requirements. Whether you desire more subscriptions or likes, we have you covered."
            button="hidden"
            image={Asset2}
          />
          <Hero
            title="Services Pakistan - Amplify Your Watch Hours"
            colorfulTitle="YouTube Monetization"
            titleSize="text-2xl sm:text-2xl xl:text-5xl lg:text-5xl md:text-2xl"
            description="Achieving the goal of 4000 watch hours is our specialty. Our monetization strategies are highly effective, ensuring your project and content are optimized to reach the required milestone. We understand that beginners on YouTube may face various obstacles in accomplishing this goal. Rest assured; we will strive to make it happen for you."
            button="hidden"
            image={Asset3}
          />
          <Customers />
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
          <FAQ />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WpPluginsThemes;
