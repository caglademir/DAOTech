import React from 'react'

export default function Modal({ setIsOpen }) {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 backdrop-blur-lg flex justify-center items-center ' >
            <div className='w-[65%] h-[95%] bg-gradient-to-r from-gray-950 via-sky-800 to-gray-950 rounded-lg flex flex-col'>
                <button
                    onClick={() => { setIsOpen(false) }}
                    className=' text-white h-[10%] place-self-end w-[5%] m-2 '
                >X
                </button>
                <div>
                    <div className='text-3xl font-bold text-gray-200 ml-20 mb-2'>DAO Members:</div>
                    <div className='bg-white/20 p-4 ml-20 mr-20 rounded-lg'>

                        <div className='grid grid-cols-4'>
                            <div>
                                <img
                                    class="w-28 h-28 rounded-full"
                                    src="/src/img/avatar.jpg"
                                    alt="Large avatar" />
                            </div>

                            <div
                                class="col-span-3 flex items-center ">
                                <div className='bg-white/30 font-bold rounded-lg text-sky-900 w-full p-2'>
                                    Wallet
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='bg-transparent mt-10 mr-40 ml-40 rounded-lg'>
                        <button
                            type="button"
                            class="w-full text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-md px-5 py-2.5 text-center 
            inline-flex items-center justify-center">
                            Next Step
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </button>
                    </div>
                </div>




            </div>
        </div>
    )
}