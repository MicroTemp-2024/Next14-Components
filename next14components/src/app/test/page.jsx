
import Container from "../components/TcontaiNer";
import Tfooter from "../components/Tfooter";
import Sidebar from "../components/TsideBar";

function page() {

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-gray-dark">
            <div className="hidden md:w-60 md:block">
                <Sidebar />
            </div>

            <div className="bg-gray-light md:flex-grow md:block">
                <Container />
                <Tfooter />
            </div>

        </div>
    );
}

export default page;

{/*
menuItems={menuItems} isDsidebarOpen={isDsidebarOpen}
*/}