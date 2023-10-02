import React from 'react';
import Error from "../../../assets/images/onError.png";

const YTReview = (props) => {
    const {image,name,comment}=props;
    return (
        <section>
            <div className="container py-24 mx-auto">
                <div className="lg:w-1/2 mx-auto">
                    <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left border-[1px] rounded-md">
                        <img alt="team"
                             className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                             src={image}
                             onError={({ currentTarget }) => {
                                 currentTarget.onerror = null; // prevents looping
                                 currentTarget.src =Error;
                             }}/>
                        <div className="flex-grow sm:pl-8">
                            <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
                            <p className="mb-4 text-sm px-2 xl:px-0 lg:px-0 md:px-0 sm:px-2">{comment}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default YTReview;
