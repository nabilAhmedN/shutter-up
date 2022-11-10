import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddService from "../Pages/AddService/AddService";
import AllServices from "../Pages/AllServices/AllServices";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviews from "../Pages/MyReviews/MyReviews";
import ReviewForm from "../Pages/ReviewForm/ReviewForm";
import ReviewUpdate from "../Pages/ReviewUpdate/ReviewUpdate";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/myreviews",
                element: <MyReviews />,
            },
            {
                path: "/addservice",
                element: <AddService />,
            },
            {
                path: "/allservices",
                element: <AllServices />,
            },
            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/review/:id",
                element: (
                    <PrivateRoute>
                        <ReviewForm />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/services/${params.id}`),
            },
            {
                path: "/update/:id",
                element: <ReviewUpdate />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/reviews/${params.id}`),
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
        ],
    },
]);