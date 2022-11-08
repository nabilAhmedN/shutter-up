import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShortServicesCard from './ShortServicesCard'

const ShortServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div>
            <h2 className="text-center text-xl font-bold mt-3">My Services</h2>
            <p className="text-center my-5 text-4xl font-bold">
                I provide this type of Services
            </p>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <ShortServicesCard key={service._id} service={service} />
                ))}
            </div>
            <div className="text-center m-5">
                <Link to="/">
                    <button className="btn btn-primary">See All Services</button>
                </Link>
            </div>
        </div>
    );
};

export default ShortServices;
