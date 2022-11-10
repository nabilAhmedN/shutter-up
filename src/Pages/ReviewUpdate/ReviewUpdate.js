import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from '../hooks/useTitle';

const ReviewUpdate = () => {

    useTitle("Review Update");

    const data = useLoaderData()
    const { _id, message, serviceName, rating, price } = data;

    const [user, setUser] = useState(data)

    const handleUpdateUser = (event) => {
        event.preventDefault()
        console.log(user);

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success("Review Updated", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            });
    };

    const handleInputChange = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user}
        newUser[field] = value;
        setUser(newUser)
    }

    return (
        <div>
            <h2 className="text-center text-3xl font-semibold">
                Update Your Review Here!
            </h2>
            <form onSubmit={handleUpdateUser} className="m-10 ">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Product (read only)
                </label>
                <input
                    onChange={handleInputChange}
                    name="serviceName"
                    type="text"
                    placeholder="Service Name"
                    defaultValue={serviceName}
                    className="input input-ghost w-full my-2 input-bordered"
                    readOnly
                />
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Ratings
                </label>
                <input
                    onChange={handleInputChange}
                    name="rating"
                    type="text"
                    placeholder="Rating"
                    defaultValue={rating}
                    className="input input-ghost w-full my-2 input-bordered"
                />
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                >
                    Price (read only)
                </label>
                <input
                    onChange={handleInputChange}
                    name="price"
                    type="text"
                    placeholder="Price"
                    defaultValue={price}
                    className="input input-ghost w-full my-2 input-bordered"
                />

                <textarea
                    onChange={handleInputChange}
                    name="message"
                    placeholder="FeedBack"
                    className="textarea textarea-bordered mt-5 h-24 w-full"
                    defaultValue={message}
                ></textarea>
                <div className="text-center mt-4">
                    <button type="submit" className="btn btn-primary ">
                        Update Review
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ReviewUpdate;