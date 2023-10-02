import React from 'react';
import Error from "../../../assets/images/onError.png";

const Card = (props) => {
    const {image, name, display} = props;
    return (
        <section>
            <div className="container px-5 py-24 mx-auto">
                <div className="p-4 lg:w-1/2 mx-auto">
                    <div
                        className={`flex h-full sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-[1px] rounded-md`}>
                        <img alt="team"
                             className={`${display==="hidden"?"block":"hidden"} flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4`}
                             src={image}
                             onError={({currentTarget}) => {
                                 currentTarget.onerror = null; // prevents looping
                                 currentTarget.src = Error;
                             }}/>
                        {/*<h1 className="flex justify-end items-end text-center">ChatGPT</h1>*/}
                        <div className={`flex-grow text-center`}>
                            <a href='https://app.toolsfix.net/signup/individual-tools'
                               className={`${display} w-full xl:w-1/3 lg:w-1/3 md:w-1/3 sm:w-full text-white bg-[#454545] hover:bg-stone-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-bold rounded-xl text-medium px-8 py-4 text-center mx-auto my-16 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
                               rel="noreferrer"
                            >
                                View More
                            </a>
                            <h1 className="title-font font-bold text-2xl text-gray-900">{name}</h1>
                            {/*<p className="mb-4">{comment}</p>*/}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Card;
