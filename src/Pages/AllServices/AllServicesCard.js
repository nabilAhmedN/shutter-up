import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";

const AllServicesCard = ({ service }) => {
    const { _id, img, title, price, description, rating } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl ml-3">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">{price}</h2>
                <p className="flex items-center">
                    <AiFillStar className="text-orange-400" />{" "}
                    <span>{rating}</span>
                </p>
                <p>{description.slice(0, 100) + "..."}</p>
                <div className="card-actions">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;