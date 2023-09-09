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
        <div className='flex justify-end text-xl font-bold text-gray-200'>
          phone: &nbsp; <a className='hover:underline hover:text-lg text-gray-400' href="tel:+905000000000">
            +90 555 444 33 22</a></div>
        <div className='flex justify-center text-3xl w-full'>I</div>
        <div className='flex justify-start text-xl font-bold text-gray-200'>
          e-mail: &nbsp;<a className='hover:underline hover:text-lg text-gray-400' href="mailto:test@example.com">
            test@example.com</a></div>
        <div></div>
      </div>
      <div className='flex justify-center'>

        <div class="p-6 ">
          <button class="w-20 h-20 rounded-full border-2 border-gray-200 flex items-center justify-center 
                       bg-sky-500 hover:bg-sky-600 text-white font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class=" w-12"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </button>
        </div>
        <div class="p-6">
          <button class="w-20 h-20 rounded-full border-2 border-gray-200 flex items-center justify-center 
                       bg-sky-700 hover:bg-sky-800 text-white font-bold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-12"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </button>
        </div>
        <div class="p-6">
          <button class="w-20 h-20 rounded-full border-2 border-gray-200 flex items-center justify-center 
                       bg-gray-100 hover:bg-gray-300 text-white font-bold text-xl">
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
