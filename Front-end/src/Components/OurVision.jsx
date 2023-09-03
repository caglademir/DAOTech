import React from 'react'

export default function OurVision() {
    return (
        <div>


            <div className='p-24 mt-4 mb-4'>
                <div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 mt-16 '>
                    <div className='flex justify-center bg-white/20 rounded-lg'>
                        <img src='src/img/ai-eye.png' className=''></img>
                    </div>
                    <div className=''>
                        <h2 className='text-right text-8xl font-medium text-sky-200'>Our Vision</h2>
                        <p className='text-2xl text-white text-right mt-8'>
                            DAOTech is a platform that enables users to come together to create community-focused DAOs (Decentralized Autonomous Organizations) in order to realize their dreams and foster innovation.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    )
}
