import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logimg from "../../assets/images/loginImage.jpg";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../hooks/useTitle";

const Login = () => {

    useTitle('Login')

    const { login, googleProviderLogin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => console.error(error));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                form.reset();

                const currentUser = {
                    email: user.email,
                };

                console.log(currentUser);

                // get jwt token
                fetch("http://localhost:5000/jwt", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(currentUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        // local storage is the easiest but not the best place to store jwt token
                        localStorage.setItem("shutterUp-token", data.token);
                        navigate(from, { replace: true });
                    });


                // navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img
                        className="ml-20 w-3/4 rounded-lg"
                        src={Logimg}
                        alt=""
                    />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
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
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-primary"
                                type="submit"
                                value="Login"
                            />
                        </div>
                    </form>
                    <p className="text-center">
                        New to this website? Please
                        <Link
                            className="text-fuchsia-500 font-bold"
                            to="/signup"
                        >
                            Sign Up
                        </Link>
                    </p>
                    <p className="text-center pt-3 divider">OR</p>
                    <div className="text-center pt-3">
                        <button
                            onClick={handleGoogleSignIn}
                            className="btn btn-wide btn-outline btn-primary"
                        >
                            <FaGoogle />
                            <span className="ml-3 ">Login with Google</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
