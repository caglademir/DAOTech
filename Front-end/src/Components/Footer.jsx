import React from 'react'
import Ingredients from './Ingredients'




export default function Footer() {
  return (
    <div id='contactUs'>
      <div className='flex justify-center mr-6'>
      <img src="/src/img/logob.png" className='w-3/12' alt="DAOTech.logo" />
      </div>
      <div className=''>
      <Ingredients></Ingredients>
      </div>
      <div className='grid grid-cols-5 text-white mt-14'>
        <div></div>
        <div className='flex justify-end text-md font-bold text-gray-200'>
          phone: &nbsp; <a className='hover:underline hover:text-lg ' href="tel:+905000000000">
            +90 555 444 33 22</a></div>
        <div className='flex justify-center text-2xl w-full'>l</div>
        <div className='flex justify-start text-md font-bold text-gray-200'>
          e-mail: &nbsp;<a className='hover:underline hover:text-lg' href="mailto:test@example.com">
            test@example.com</a></div>
        <div></div>
      </div>
      <div className='flex justify-center'>
      
      <div class="p-6 ">
        <button class="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center 
                       bg-sky-500 hover:bg-sky-600 text-white font-bold text-xl">
          <img className='w-12' src="src/img/twitter.png" alt="" />
        </button>
      </div>
      <div class="p-6">
        <button class="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center 
                       bg-sky-700 hover:bg-sky-800 text-white font-bold text-xl">
          <img className='w-12' src="src/img/linkedin.png" alt="" />
        </button>
      </div>
      <div class="p-6">
        <button class="w-20 h-20 rounded-full border-2 border-black flex items-center justify-center 
                       bg-sky-100 hover:bg-sky-200 text-white font-bold text-xl">
          <img className='w-16' src="src/img/medium.png" alt="" />
        </button>
      </div>
      </div>

      
    <div class="w-full max-w-screen-xl mx-auto  md:py-8">
       
        <span class="block text-lg text-gray-200 sm:text-center ">© 2023  &nbsp;<a href="*" class="hover:underline">DAO Tech.</a>&nbsp; &nbsp; All Rights Reserved.</span>
    </div>




    </div>
  )
}
