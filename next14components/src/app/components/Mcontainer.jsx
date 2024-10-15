// @Main Page
import React from 'react'

const MainCont = () => {
    return (
        <div className='grid grid-row-3'>

            <div className='min-h-full'>
                <header className='p-6'>

                    <p className='text-2xl'>
                        Header : Main Page
                    </p>

                    <p className='text-gray text-sm mb-5'>Main Page</p>

                </header>

                <div className='grid grid-cols-1 p-6'>
                    <catd className="bg-white h-auto border-2 shadow-sm rounded-md border-gray border-opacity-25">
                        <div className='card-header bg-blue text-white rounded-t-md p-4'>
                            Card Header
                        </div>
                        <div className=' p-4'>
                            Card Contents Container
                        </div>
                    </catd>
                </div>
            </div>

            <div className='space max-h-full'>
                
            </div>

            <div className='footer flex justify-between items-center h16 bg-white p-4'
                style={{
                    flex: 0,
                }}>
                <p className='text-gray'>Copyright © 2024-2034</p>
                <p className='text-gray'>Next14Component</p>
            </div>

        </div>
    )
}

export default MainCont