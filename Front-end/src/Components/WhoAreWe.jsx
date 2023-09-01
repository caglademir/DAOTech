import React from 'react'

export default function WhoAreWe() {
    return (
        <div>
            <div className='p-24 mt-4 mb-4 '>

                <div className='grid grid-cols-2 '>
                    <div >
                        <h2 className='text-left text-8xl font-medium text-sky-200'>Who are we?</h2>
                        <p className='text-2xl text-white text-left mt-6 '>
                            DAOTech is a platform that enables users to come together to create community-focused DAOs (Decentralized Autonomous Organizations) in order to realize their dreams and foster innovation.
                        </p>
                        <div
                            id="button"
                            className="flex items-center justify-center float-left mt-6 ">
                            <button

                                className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-bl border-blue-400 text-white font-bold p-5  h-[60%] rounded-2xl ">
                                Connect to Phantom
                                <img
                                    src="src/img/ghost.png"
                                    alt="phantom-logo"
                                    className="w-9 ml-2 "
                                    md: invisible
                                />
                            </button>
                        </div>
                    </div>

                    <div className='bg-white/20 rounded-lg flex justify-center'>
                        <img src='src/img/dao-2.png'></img>
                    </div>

                </div>

            </div>

        </div>
    )
}
