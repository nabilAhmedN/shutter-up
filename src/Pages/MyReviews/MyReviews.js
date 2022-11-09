import React from "react";
import logo from '../../assets/images/shutter-up-dr.png'

const MyReviews = () => {
    return (
        <section className="py-24 2xl:py-44 bg-blueGray-100 border-fuchsia-200 overflow-hidden w-3/4 mx-auto ">
            <div className="container px-4 mx-auto ">
                <div className="mb-2 shadow-lg rounded-lg overflow-hidden">
                    <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-fuchsia-200 bg-opacity-40">
                        <div className="flex flex-wrap items-center">
                            <img
                                className="mr-6 h-14 rounded-lg"
                                src={logo}
                                alt=""
                            />
                            <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                                Faustina H. Fawn
                            </h4>
                            <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                            <span className="mr-4 text-xl font-heading font-medium">
                                5.0
                            </span>
                        </div>
                    </div>
                    <div className="px-4 overflow-hidden md:px-16 pt-8 pb-12 bg-fuchsia-50">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-2/3 mb-6 md:mb-0">
                                <p className="mb-8 max-w-2xl text-darkBlueGray-400 leading-loose">
                                    I haretra neque non mi aliquam, finibus hart
                                    bibendum molestie. Vestibulum suscipit
                                    sagittis dignissim mauris.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 text-right">
                                <p className="mb-8 text-sm text-gray-300">
                                    Added 2 months ago
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyReviews;
