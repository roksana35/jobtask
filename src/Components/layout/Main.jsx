import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-300px)]">
            <Outlet></Outlet>
        </div>
        
    </div>
    )
};

export default Main;