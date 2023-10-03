import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BsWordpress } from "react-icons/bs";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { GoCreditCard } from "react-icons/go";
// import { TbHandTwoFingers } from "react-icons/tb";
// import FeatureCard from './FeatureCard';

const Feature = (props) => {
  return (
    <section className="text-gray-600 body-font text-center">
      {/*// <div className="container px-5 py-24 mx-auto">*/}
      {/*//     <div className="text-center mb-20">*/}
      {/*//         <h1 className="text-4xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-4xl font-bold title-font text-gray-900 mb-4">Why Choosing us ?</h1>*/}
      {/*        <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500">What Makes us Best !</p>*/}
      {/*    </div>*/}
      {/*    <div className="lg:flex lg:flex-row lg:flex-nowrap xl:flex xl:flex-row xl:flex-nowrap md:flex md:flex-row md:flex-nowrap sm:flex sm:flex-wrap sm:flex-col gap-14 px-0 xl:px-16 lg:px-16 md:px-16 sm:px-0">*/}
      {/*        <FeatureCard*/}
      {/*            icon={<AiOutlineClockCircle />}*/}
      {/*            title="The Best Support"*/}
      {/*            description="Our Team Experts are Always Ready to Assist Our Users with best possible solution of any queries."*/}
      {/*        />*/}
      {/*        <FeatureCard*/}
      {/*//             icon={<GoCreditCard />}*/}
      {/*//             title="Easy To Pay"*/}
      {/*//             description="We accept EasyPaisa, JazzCash and Bank Accounts to make payment easy."*/}
      {/*//         />*/}
      {/*        <FeatureCard*/}
      {/*            icon={<TbHandTwoFingers />}*/}
      {/*            title="Best Uptime"*/}
      {/*            description="We have the best uptime of tools over the whole market. Our tools are always Live 24/7."*/}
      {/*        />*/}
      {/*    </div>*/}
      {/*</div>*/}
      <a
        href="/wpMain"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-medium px-8 py-4 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <BsWordpress className="inline" size={22} />
        &nbsp;&nbsp; Show Available Products
      </a>
      <a
        target="_blank"
        href="https://wa.me/923218043010"
        className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-full text-medium px-8 py-4 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        rel="noreferrer"
      >
        <BsWhatsapp className="inline" size={22} />
        &nbsp;&nbsp; Chat on WhatsApp
      </a>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-3xl xl:text-6xl lg:text-6xl md:text-6xl sm:text-3xl font-bold title-font text-gray-900 mb-4">
            {props.title}
          </h1>
        </div>
        <div className="flex items-center justify-center mt-24">
          <img src={props.image} alt="img" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Feature;
