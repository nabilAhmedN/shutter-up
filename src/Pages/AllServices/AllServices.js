import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../hooks/useTitle";
import AllServicesCard from "./AllServicesCard";
import load from "../../assets/images/loading.gif"

const AllServices = () => {
    useTitle("My Services");

    const { loading } = useContext(AuthContext)

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("https://shutter-up-server-gamma.vercel.app/allservices")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

     if (loading) {
         return <img className="mx-auto d-block" src={load} alt="" />;
     }

    return (
        <div>
            <h2 className="text-center text-xl font-bold mt-3">My Services</h2>
            <p className="text-center my-5 text-4xl font-bold">
                Choice your faviourite one!
            </p>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-4">
                {services.map((service) => (
                    <AllServicesCard key={service._id} service={service} />
                ))}
            </div>
        </div>
    );
};

export default AllServices;
