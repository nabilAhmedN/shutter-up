import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import MyReviewTab from "../MyReviewTab/MyReviewTab";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem(
                    "shutterUp-token"
                )}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, [user?.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure to delete");
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success("Review deleted", {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                        const remaining = reviews.filter(
                            (review) => review._id !== id
                        );
                        setReviews(remaining);
                    }
                });
        }
    };

    return (
        <div>
            {reviews?.length === 0 ? (
                <>
                    <h2 className=" text-center m-40 mx-auto text-2xl text-fuchsia-300 font-bold">
                        No reviews here
                    </h2>
                </>
            ) : (
                <>
                    <h2 className="text-3xl">
                        You have {reviews.length} review
                    </h2>
                    <div className="overflow-x-auto w-full mb-5">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th>Delete</th>
                                    <th>Service name</th>
                                    <th>Reviewer</th>
                                    <th>Photo</th>
                                    <th>FeedBack</th>
                                    <th>Rating</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {reviews.map((review) => (
                                    <MyReviewTab
                                        key={review._id}
                                        review={review}
                                        handleDelete={handleDelete}
                                    ></MyReviewTab>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
            <ToastContainer />
        </div>
    );
};

export default MyReviews;
