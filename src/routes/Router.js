import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "../pages/Dashboard/MyOrder/MyOrder";
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
                loader: ({ params }) => fetch(`https://bikers-station-server.vercel.app/category/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrder></MyOrder>
            },
            {
                path: '/dashboard/add-products',
                element: <AddProduct></AddProduct>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])