import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/Products/Products";

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
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Products></Products>
            }
        ]
    }
])