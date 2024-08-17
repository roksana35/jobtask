import { useContext } from "react";
import { AuthContext } from "../authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    // Debugging console logs
    // console.log("Loading:", loading);
    // console.log("User:", user);

    if (loading) {
        return <span className="loading ml-32 lg:ml-96 loading-ring loading-lg"></span>;
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace />;
};

export default PrivateRoute;
