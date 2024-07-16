import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />


            <div className=" flex-1 flex-col ">
                <Header />
                <div className="gap-4 p-4 lg:gap-6 lg:p-6">
                    <Outlet />
                </div>
            </div>


        </div>
    );
};

export default DashBoard;