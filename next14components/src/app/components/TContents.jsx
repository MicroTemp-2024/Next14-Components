// @Test

const TContent = () => {
    return (
        <main className="p-6 grid gap-4">

            {/* 1 col 1 row */}
            <div className="bg-orange rounded-md p-4">
                <p>Card1</p>
            </div>

            {/* 2 cols 1 row ขนาด mobile = 2 rows*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-orange rounded-md p-4">
                    <p>Card1</p>
                </div>

                <div className="bg-green rounded-md p-4">
                    <p>Card2</p>
                </div>

            </div>

            {/* 4 cols 1 row ขนาด mobile = 4 rows*/}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                <div className="bg-orange rounded-md p-4">
                    <p>Card1</p>
                </div>

                <div className="bg-green rounded-md p-4">
                    <p>Card2</p>
                </div>

                <div className="bg-yellow rounded-md p-4">
                    <p>Card3</p>
                </div>

                <div className="bg-purple rounded-md p-4">
                    <p>Card4</p>
                </div>

            </div>

            {/* 2 cols 2 row ขนาด mobile = 3 rows*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-orange rounded-md p-4">
                    <p>Card1</p>
                </div>

                <div className="grid gap-4">

                    <div className="bg-green rounded-md p-4">
                        <p>Card2</p>
                    </div>

                    <div className="bg-yellow rounded-md p-4">
                        <p>Card3</p>
                    </div>

                </div>

            </div>

            {/* 3 cols 1 row ขนาด mobile = 3 rows*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-orange rounded-md p-4">
                    <p>Card1</p>
                </div>

                <div className="bg-green rounded-md p-4">
                    <p>Card2</p>
                </div>

                <div className="bg-yellow rounded-md p-4">
                    <p>Card3</p>
                </div>

            </div>

            {/* 3 cols 1 row ขนาด mobile = 3 rows*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-orange rounded-md p-4">
                    <p>Card1</p>
                </div>

                <div className="bg-green rounded-md md:col-span-2 p-4">
                    <p>Card2</p>
                </div>

            </div>

            {/* 3 cols 1 row ขนาด mobile = 3 rows*/}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-orange rounded-md md:col-span-2 p-4">
                    <p>Card1</p>
                </div>

                <div className="bg-green rounded-md p-4">
                    <p>Card2</p>
                </div>

            </div>

        </main>
    );
};

export default TContent;