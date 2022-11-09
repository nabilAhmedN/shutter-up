import React from 'react';

import { AiFillStar } from "react-icons/ai";

const PersonReview = ({review}) => {

    const { reviewer, img, rating, serviceName, message } = review;

    return (
        <div className="container px-4 mx-auto ">
            <div className="mb-2 shadow-lg rounded-lg overflow-hidden">
                <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-fuchsia-200 bg-opacity-40">
                    <div className="flex flex-wrap items-center">
                        <img
                            className="mr-6 h-14 rounded-lg"
                            src={img}
                            alt=""
                        />
                        <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                            {reviewer}
                        </h4>
                        <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                        <span className="mr-4 text-xl font-heading font-medium">
                            <h2>{serviceName}</h2>
                        </span>
                        <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                        <div className="flex items-center mr-4 text-xl font-heading font-medium">
                            <AiFillStar className="text-orange-400" /> {rating}
                        </div>
                    </div>
                </div>
                <div className="px-4 overflow-hidden md:px-16 pt-8 bg-fuchsia-50">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-2/3 mb-6 md:mb-0">
                            <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                                {message}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonReview;