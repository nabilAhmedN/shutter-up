import React from 'react';
import booking from "../../assets/images/img4.png";
import booking2 from "../../assets/images/img3.png";
import booking3 from "../../assets/images/img2.png";
import booking4 from "../../assets/images/img1.png";

const Ability = () => {
    return (
        <section className="bg-fuchsia-50 w-4/5 mx-auto rounded-lg mb-3">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-7 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900">
                        Why take photos with Me?
                    </h2>
                </div>
                <div className="grid gap-8 lg:grid-cols-2">
                    <article className="p-6 bg-fuchsia-100  rounded-lg border border-fuchsia-200 shadow-md ">
                        <div className="flex items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            <img src={booking} alt="" className="h-16" />
                            <h2>Hassle-Free Booking</h2>
                        </div>
                        <p className="mb-5 ml-16 text-gray-500 font-medium">
                            Choose a destination, select your package and get
                            matched to a local photographer. It’s just that
                            easy.
                        </p>
                    </article>
                    <article className="p-6 bg-fuchsia-100  rounded-lg border border-fuchsia-200 shadow-md ">
                        <div className="flex items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            <img src={booking2} alt="" className="h-16" />
                            <h2>Local Photography Experts</h2>
                        </div>
                        <p className="mb-5 ml-16 text-gray-500 font-medium">
                            I am bonafide locals who are vetted one by one to
                            meet my high service standards.
                        </p>
                    </article>
                    <article className="p-6 bg-fuchsia-100  rounded-lg border border-fuchsia-200 shadow-md ">
                        <div className="flex items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            <img src={booking3} alt="" className="h-16" />
                            <h2>High Quality Photos</h2>
                        </div>
                        <p className="mb-5 ml-16 text-gray-500 font-medium">
                            I ensure that your photos are edited with the same
                            consistent high quality.
                        </p>
                    </article>
                    <article className="p-6 bg-fuchsia-100  rounded-lg border border-fuchsia-200 shadow-md ">
                        <div className="flex items-center mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                            <img src={booking4} alt="" className="h-16" />
                            <h2>Fast Delivery</h2>
                        </div>
                        <p className="mb-5 ml-16 text-gray-500 font-medium">
                            As I edit all of your photos in-house, I am able to
                            deliver the photos in 48 hours at top notch quality.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Ability;