// @Test

import Navbar from "./TnavBar";
import Tfooter from "./Tfooter";
import Contents from "./TestContent";


const Container = () => {
    return (
        <main className="h-screen">

            <Navbar />

            <Contents />

            <Tfooter />

        </main>
    );
};

export default Container;