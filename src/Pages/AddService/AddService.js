import React from 'react';
import useTitle from '../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddService = () => {

    useTitle("Add service");

    const dateobj = new Date();
    const date = dateobj.toISOString();

    const handleService = (event) => {
        event.preventDefault();
        const form = event.target;
        const service_id = form.service_id.value;
        const title = form.title.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const img = form.img.value;
        const description = form.description.value;
        const date = form.date.value;

        const review = {
            service_id,
            title,
            price,
            rating,
            img,
            description,
            date,
        };

        fetch("http://localhost:5000/services", {
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
                    toast.success("Service Post on Database successfully", {
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
            .catch((er) => console.error(er));
    };

    return (
        <div>
            <h2 className="text-center text-3xl text-orange-600 font-bold">
                Add a New Subject Here!
            </h2>
            <div>
                <form onSubmit={handleService} className="m-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <input
                            name="service_id"
                            type="text"
                            placeholder="Service id"
                            className="input input-ghost w-full  input-bordered"
                            required
                        />
                        <input
                            name="title"
                            type="text"
                            placeholder="Service Name"
                            className="input input-ghost w-full  input-bordered"
                            required
                        />
                        <input
                            name="price"
                            type="text"
                            placeholder="Price"
                            className="input input-ghost w-full  input-bordered"
                            required
                        />
                        <input
                            name="rating"
                            type="text"
                            placeholder="Rating"
                            className="input input-ghost w-full  input-bordered"
                        />
                        <input
                            name="img"
                            type="text"
                            placeholder="Image URL"
                            className="input input-ghost w-full  input-bordered"
                        />
                        <input
                            name="date"
                            type="text"
                            placeholder="Date"
                            defaultValue={date}
                            className="input input-ghost w-full  input-bordered"
                            readOnly
                        />
                    </div>

                    <textarea
                        name="description"
                        className="textarea textarea-bordered mt-5 h-24 w-full"
                        placeholder="feedback"
                        required
                    ></textarea>
                
                    <div className="text-center">
                        <input
                            className="btn btn-primary mt-5"
                            type="submit"
                            value="Submit Service"
                        />
                    </div>
                </form>
            </div>

            <ToastContainer />
        </div>
    );
};

export default AddService;