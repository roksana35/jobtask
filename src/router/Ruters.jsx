import { createBrowserRouter } from "react-router-dom";
import Register from "../Components/Register";
import Login from "../Components/Login";

import Main from "../Components/layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [

            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ],
    },
    
])
export default router;