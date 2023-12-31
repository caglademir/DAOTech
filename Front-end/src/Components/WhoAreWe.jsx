import React from "react";
import { Link } from "react-router-dom";

export default function WhoAreWe({setIsOpen}) {
    return (
        <div id='whoAreWe'>
            <div className='p-28 mt-4 '>
                <div className='grid grid-cols-2 gap-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 '>
                    <div className='p-14'>
                        <h2 className='text-left text-9xl  text-sky-200 font-anton '>DAOTech </h2>
                        <h2 className='text-left text-4xl font-anton  text-sky-500'>
                            Shaping the Future of Communities Platform
                        </h2>
                        <p className='text-3xl text-white text-left mt-6 font-antonio  '>
                            DAOTech is a platform that enables users to come together to create community-focused DAOs (Decentralized Autonomous Organizations) in order to realize their dreams and foster innovation.
                        </p>
                        <div id="button" className="flex items-center justify-center float-left mt-6  ">
                            <Link to={'/createDao'}>
                            <button
                            
                             className="flex items-center bg-gradient-to-r from-blue-500 to-blue-800 hover:bg-gradient-to-bl border-blue-400 text-gray-200 font-antonio p-4 rounded-lg  ">
                                Create a Dao
                               
                            </button>
                            </Link>
                        </div>
                    </div>
                    <div className=''>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}
