import React from 'react';

const Work = () => {
    return (
        <section className="bg-white ">
            <div className="py-8 px-10 mx-auto max-w-screen-xl lg:py-4 lg:px-24">
                <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                    <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
                        How it works?
                    </h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-4">
                    <article className="p-6 rounded-lg border shadow-md bg-fuchsia-100 ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Book
                        </h2>
                        <p className="mb-5 font-normal text-gray-500">
                            Please tell me where, when, and what the occasion
                            is. Then i will go to the root.
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md bg-fuchsia-100 ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Plan
                        </h2>
                        <p className="mb-5 font-normal text-gray-500">
                            I am available to discuss and organize the shoot
                            with you using the chat system in my app.
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md bg-fuchsia-100 ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Shoot
                        </h2>
                        <p className="mb-5 font-normal text-gray-500">
                            I will come on time with professional equipment to
                            capture your moments and give a memorable
                            experience.
                        </p>
                    </article>
                    <article className="p-6 rounded-lg border shadow-md bg-fuchsia-100 ">
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            Download
                        </h2>
                        <p className="mb-5 font-normal text-gray-500">
                            I will edit improve your images, which you will be
                            able to download straight to your devices 48 hours
                            following your session.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Work;