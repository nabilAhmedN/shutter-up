import React, { useEffect, useState } from 'react';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/allservices")
            .then((res) => res.json())
            .then((data) => setServices(data));
    },[])
    return (
        <div>
            <h2 className="text-center text-xl font-bold mt-3">My Services</h2>
            <p className="text-center my-5 text-4xl font-bold">Choice your faviourite one!</p>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-6">
                {services.map((service) => (
                    <AllServicesCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default AllServices;