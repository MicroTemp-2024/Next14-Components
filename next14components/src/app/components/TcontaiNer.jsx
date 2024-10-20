// @Test

import Navbar from "./TnavBar";
import Contents from "./TestContent";


const Container = () => {
    return (
        <main className="h-screen">

            <Navbar />

            <Contents />
        </main>
    );
};

export default Container;