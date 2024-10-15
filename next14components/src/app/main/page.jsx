"use client"

import MainCont from "../components/Mcontainer";
import NavBar from "../components/MnavBar";
import SideBar from "../components/MsideBar";

const page = () => {

    return (
        <div className="h-screen">
            <div className="flex flex-col md:flex-row h-screen">
                {/* ส่ง menuItems เป็น props */}
                <SideBar />

                <div className="flex-1">
                    {/* ส่ง menuItems เป็น props */}
                    <NavBar />

                    <MainCont />

                </div>

            </div>

        </div>
    );
}

export default page;