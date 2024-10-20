import React from 'react'

const Color = () => {
    return (
        <section className="flex-col p-4">

            <div className="header h-auto p-1">
                <p className="text-xl">Color</p>
                <span className="text-xs text-gray">
                    <a href='main'>Home</a> / Color</span>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-4">
                
                <div className="p-1 rounded-md bg-white shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#FFFFFF</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-white
                    </div>

                </div>

                <div className="p-1 rounded-md bg-blue shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#1FB6FF</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-blue
                    </div>

                </div>

                <div className="p-1 rounded-md bg-purple shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#7E5BEF</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-purple
                    </div>

                </div>

                <div className="p-1 rounded-md bg-pink shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#FF49DB</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-pink
                    </div>

                </div>

            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-4">
                
                <div className="p-1 rounded-md bg-orange shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#FF7849</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-orange
                    </div>

                </div>

                <div className="p-1 rounded-md bg-green shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#13CE66</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-green
                    </div>

                </div>

                <div className="p-1 rounded-md bg-yellow shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#FFC82C</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-yellow
                    </div>

                </div>

                <div className="p-1 rounded-md bg-gray-dark shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#273444</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-gray-dark
                    </div>

                </div>

            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 gap-4 my-4">
                
                <div className="p-1 rounded-md bg-gray shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#8492A6</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-gray
                    </div>

                </div>

                <div className="p-1 rounded-md bg-gray-light shadow-md">

                    <div className="header text-center text-2xl pt-8 pb-8 h-auto">
                        <p>#D3DCE6</p>
                    </div>

                    <div className="content text-center text-gray">
                    bg-gray-light
                    </div>

                </div>

            </div>
            
        </section>
    )
}

export default Color