import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useTitle from "../hooks/useTitle";

const ReviewForm = () => {

    useTitle("Review Form");

    let dateObj = new Date();
    let dateAndTime = dateObj.toISOString();

    const { _id, title, price } = useLoaderData();

    const { user } = useContext(AuthContext);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregistered";
        const img = form.photoUrl.value;
        const rating = form.rating.value;
        const date = form.date.value;
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            reviewer: name,
            email,
            img,
            rating,
            date,
            message,
        };
        fetch("http://localhost:5000/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(review),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success("Review Post successfully", {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    form.reset();
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <form onSubmit={handleReview} className="m-10">
                <h2 className="text-2xl text-center font-semibold">
                    Reveiw on: {title}
                </h2>
                <p className="text-xl text-center font-medium">{price}</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        className="input input-ghost w-full  input-bordered"
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="input input-ghost w-full  input-bordered"
                    />
                    <input
                        name="photoUrl"
                        type="text"
                        placeholder="Photo Url"
                        className="input input-ghost w-full  input-bordered"
                        required
                    />
                    <input
                        name="email"
                        type="text"
                        placeholder="Your email"
                        defaultValue={user?.email}
                        className="input input-ghost w-full  input-bordered"
                        readOnly
                    />
                    <input
                        name="rating"
                        type="text"
                        placeholder="Rating"
                        className="input input-ghost w-full  input-bordered"
                    />
                    <input
                        name="date"
                        type="text"
                        placeholder="Date"
                        defaultValue={dateAndTime}
                        className="input input-ghost w-full  input-bordered"
                        readOnly
                    />
                </div>
                <textarea
                    name="message"
                    className="textarea textarea-bordered mt-5 h-24 w-full"
                    placeholder="FeedBack"
                    required
                ></textarea>
                <div className="text-center">
                    <input
                        className="btn btn-primary"
                        type="submit"
                        value="Submit Reveiw"
                    />
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default ReviewForm;
