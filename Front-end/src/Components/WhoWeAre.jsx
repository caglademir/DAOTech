import React from 'react'

export default function WhoWeAre() {
    return (
        <div>
            <div className='p-24 mt-4 mb-4 '>

                <h2 className='text-center text-8xl font-medium text-sky-200'>Who are we?</h2>

                <div className='grid grid-cols-3 gap-16 mt-16 '>
                    <div className='col-span-2 flex items-center'>
                        <p className='text-2xl text-white text-right '>
                            DAOTech is a platform that enables users to come together to create community-focused DAOs (Decentralized Autonomous Organizations) in order to realize their dreams and foster innovation.
                        </p>
                    </div>

                    <div className=''>
                        <img src='src/img/dao-2.png'></img>
                    </div>


                </div>





            </div>

        </div>
    )
}
