import { createBrowserRouter } from "react-router-dom";
import Register from "../Components/Register";
import Login from "../Components/Login";

import Main from "../Components/layout/Main";
import Products from "../Components/Products";
import PrivateRoute from "../Components/PrivateRoute";
import Home from "../Components/layout/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [

            {
                path:'/',
                element:<PrivateRoute><Home></Home></PrivateRoute>,
            },
            {
                path:'/login',
                element:<Login />,
            },
            {
                path:'/register',
                element: <Register />,
            },
        ],
    },
    
])
export default router;