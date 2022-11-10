import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { ImageViewer } from "react-image-viewer-dv";

const AllServicesCard = ({ service }) => {
    const { _id, img, title, price, description, rating } = service;
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl ml-3 ">
            <figure className="px-10 pt-10">
                <ImageViewer>
                    <img src={img} alt="" className="rounded-xl" />
                </ImageViewer>
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
                    <Link to={`/services/${_id}`}>
                        <button className="btn btn-primary">Check Out</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllServicesCard;