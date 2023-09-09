import React from "react";

export default function Modal3Dao({ setIsOpen2 , setIsOpen4}) {

  const prevPage = () => {
    setIsOpen2(false);
  }
  const nextPage = () => {
    setIsOpen4(true);
  }  

  return (
    <div>
       <div className="text-3xl font-bold text-gray-200 ml-20 mb-2">
        DAO Members:
      </div>
      <div className="bg-white/20 p-4 ml-20 mr-20 rounded-lg">
        <div className="grid grid-rows-2">
          <div className="flex items-end justify-center">
            <img
              class="w-28 h-28 rounded-full"
              src="/src/img/avatar.jpg"
              alt="Large avatar"
            />
          </div>
          <div class=" grid col-rows-2 mt-4">
            <div className="flex justify-start">
            <label
              for="base-input"
              class="block m-2 text-2xl font-bold text-sky-200 "
            >
              Wallet
            </label></div>
            <div class="flex items-start m-2">
            <input
              type="text"
              id="base-input"
              placeholder="wallet"
              class="bg-white/20 border-2 
                  border-sky-200 text-md rounded-lg 
                  text-stone-200 block w-full p-2.5"/>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-stretch mt-[10%]">
        <div className="bg-transparent  rounded-lg ml-[16%] justify-self-start ">
          <button
            onClick={prevPage}
            type="button"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 
       focus:ring-4 focus:outline-none focus:ring-blue-300 
       font-medium rounded-lg text-md px-5 py-2.5 text-center 
       inline-flex items-center justify-center"
          >
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0L5 1M1 5l4 4"
              />
            </svg>
             &nbsp; Back 
          </button>
        </div>

        <div className="bg-transparent  rounded-lg mr-[16%] justify-self-end  ">
          <button
            onClick={nextPage}
            type="button"
            class="w-full text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-md px-5 py-2.5 text-center 
            inline-flex items-center justify-center"
          >
            Next Step
            <svg
              class="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

     