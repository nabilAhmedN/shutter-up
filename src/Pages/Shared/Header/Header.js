import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/shutter-up-wh.png'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.error(error));
    }

    const menuItems = (
        <>
            <li className="font-semibold">
                <Link to="/">Home</Link>
            </li>

            <li className="font-semibold">
                <Link to="/blog">Blog</Link>
            </li>

            {user?.email ? (
                <>
                    <li className="font-semibold">
                        <Link to="/myreviews">My Reviews</Link>
                    </li>
                    <li className="font-semibold">
                        <Link to="/addservice">Add Service</Link>
                    </li>
                    <li className="font-semibold">
                        <button onClick={handleLogOut} className="btn-ghost">
                            Sign Out
                        </button>
                    </li>
                </>
            ) : (
                <li className="font-semibold">
                    <Link to="/login">Login</Link>
                </li>
            )}
        </>
    );
    return (
        <div className="navbar h-20 mb-12 pt-12 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        {menuItems}
                    </ul>
                </div>
                <Link
                    to="/"
                    className="btn btn-ghost h-24 w-24 normal-case text-xl"
                >
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">{menuItems}</ul>
            </div>
            <div className="navbar-end">
                <span className="pr-4 text-fuchsia-500">
                    {user?.displayName}
                </span>
            </div>
        </div>
    );
};

export default Header;