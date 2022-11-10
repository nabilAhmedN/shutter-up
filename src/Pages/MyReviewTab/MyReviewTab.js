import React from 'react';
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { MdUpdate } from "react-icons/md";

const MyReviewTab = ({review, handleDelete}) => {
    const { _id, serviceName, message, reviewer, img,  rating, } = review
    return (
        <tr>
            <td>
                <label>
                    <button onClick={() => handleDelete(_id)}>
                        <MdDeleteOutline className="text-red-500 text-2xl" />
                    </button>
                </label>
            </td>
            <td>{serviceName}</td>
            <td>{reviewer}</td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avater">
                        <div>
                            {
                                <img
                                    src={img}
                                    alt=""
                                    className="rounded-full h-16 w-16"
                                />
                            }
                        </div>
                    </div>
                </div>
            </td>
            <td>{message}</td>
            <td>{rating}</td>
            <td>
                <Link to={`/update/${_id}`}>
                    <button className="">
                        <MdUpdate className="text-green-400 text-2xl" />
                    </button>
                </Link>
            </td>
        </tr>
    );
};

export default MyReviewTab;