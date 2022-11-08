import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Signimg from "../../assets/images/signupImage.jpg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const SignUp = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleupdateUserProfile(name); 
            })
            .catch((err) => console.error(err));
    };

    const handleupdateUserProfile = (name) => {
        const profile = {
            displayName: name
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((error) => console.error(error));
    };
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className="w-3/4" src={Signimg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>
                    <p className="text-center">
                        Already have an account?
                        <Link
                            className="text-fuchsia-500 font-bold"
                            to="/login"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
