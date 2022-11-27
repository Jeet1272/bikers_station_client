import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home/Home";
import LogIn from "../pages/LogIn/LogIn";
import NotFound from "../pages/NotFound/NotFound";
import Products from "../pages/Products/Products";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])