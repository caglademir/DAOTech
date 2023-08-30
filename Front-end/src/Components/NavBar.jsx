import React from 'react'

export default function NavBar() {
    return (
        <div >

            <nav className="flex justify-items-stretch  flex-wrap p-8 bg-sky-800- gap-x-[57%]  ">

                <div className="flex items-center flex-shrink-0 text-white">

                    <span className="font-semibold text-4xl tracking-tight">DOA Tech</span>
                </div>



                <div id='button' className="flex " >
                    <button className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 hover:border-2 border-blue-400 text-white font-bold py-2 px-3 rounded-full"
                    >
                        Connect to Phantom
                        <img
                            src="src/img/ghost.png"
                            alt="phantom-logo"
                            className='w-9 ml-2 ' />
                    </button>

                </div>




            </nav>
            <nav className='w-full block flex-grow lg:flex lg:items-center lg:w-auto mb-2 '>

                <div className="text-center text-lg lg:flex-grow">
                    <a href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12 ">
                        Who are we?
                    </a>
                    <a href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12">
                        Our Vision
                    </a>
                    <a href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12">
                        RoadMap
                    </a>
                    <a href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-sky-500 hover:text-xl mr-12">
                        Contact
                    </a>
                </div>
            </nav>


            <hr className='opacity-20 ml-20 mr-20 '></hr>
        </div>
    )
}
