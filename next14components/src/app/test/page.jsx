
import Container from "../components/TcontaiNer";
import Sidebar from "../components/TsideBar"

function page() {

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-pink">
            <div className="bg-blue hidden md:w-60 md:block">
                <Sidebar />
            </div>

            <div className="bg-purple md:flex-grow md:block">
                <Container />     
            </div>

        </div>
    );
}

export default page;

{/*
menuItems={menuItems} isDsidebarOpen={isDsidebarOpen}
*/}