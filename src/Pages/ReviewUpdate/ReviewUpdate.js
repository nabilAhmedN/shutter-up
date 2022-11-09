import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ReviewUpdate = () => {

    const data = useLoaderData()
    const { _id, message, serviceName, rating, price } = data;

    const [user, setUser] = useState(data)

    const handleUpdateUser = (event) => {
        event.preventDefult()
        console.log(user);

        fetch(`http://localhost:5000/services/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(user),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.modifiedCount > 0){
                alert("user update")
            }
        })
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
            <h2 className="text-center text-3xl text-orange-600 font-bold">
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
            {/* <form onSubmit={handleUpdateUser}  className='m-10' >
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                <label className='w-full'>Product Id(readonly)</label>
                <input onChange={handleInputChange} name="service" type="text" placeholder="service" defaultValue={service} className="input input-ghost w-full  input-bordered" readOnly required/>
                <label className='w-full'>Product name</label>
                <input onChange={handleInputChange} name="serviceName" type="text" placeholder="serviceName" defaultValue={serviceName} className="input input-ghost w-full  input-bordered" readOnly required />
                <label className='w-full'>Price</label>
                <input onChange={handleInputChange} name="price" type="text" placeholder="price" defaultValue={price} className="input input-ghost w-full  input-bordered" readOnly />
                <input onChange={handleInputChange} name="rating" type="text" placeholder="rating" defaultValue={rating} className="input input-ghost w-full  input-bordered" required />
            </div>
            <textarea onChange={handleInputChange} name="message" className="textarea textarea-bordered mt-5 h-24 w-full" placeholder="FeedBack" defaultValue={message} required></textarea>
            <div className='text-center'>
            <input className='btn btn-primary' type="submit" value="update Reveiw" />
            </div>

            
        </form> */}
        </div>
    );
};

export default ReviewUpdate;