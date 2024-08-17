import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer";


const Main = () => {
    return (
        <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-300px)] p-1 lg:p-12">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
    )
};

export default Main;