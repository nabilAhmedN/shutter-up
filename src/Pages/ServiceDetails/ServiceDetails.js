import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import DisplayReview from '../DisplayReview/DisplayReview';
import useTitle from '../hooks/useTitle';

const ServiceDetails = () => {

    useTitle("Service Detail")

    const service = useLoaderData()

    const { _id ,img, title, price, description, rating } = service;

    const {user} = useContext(AuthContext)
    
    return (

        

        <div>
            <div className="mx-auto card w-3/4 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl h-85" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="card-title">{price}</h2>
                    <p className="flex items-center">
                        <AiFillStar className="text-orange-400" />{" "}
                        <span>{rating}</span>
                    </p>
                    <p>{description}</p>
                </div>
            </div>
            <div>
                <h2 className="text-center font-bold text-2xl text-fuchsia-500 mt-5 mb-3">
                    Review
                </h2>
                <div>
                    <DisplayReview id={_id} />
                </div>
                {user?.email ? (
                    <>
                        <div className="text-center mb-3">
                            <Link to={`/review/${_id}`}>
                                <button className="btn btn-outline btn-primary">
                                    Give Review
                                </button>
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="text-center mb-3">
                            {/* <Link to={`/review/${_id}`}>
                                <button className="btn btn-outline btn-primary">
                                    Login for Give Review
                                </button>
                            </Link> */}
                            <button className="btn btn-outline btn-primary">
                                <Link to={`/review/${_id}`}>
                                    Login for Give Review
                                </Link>
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ServiceDetails;