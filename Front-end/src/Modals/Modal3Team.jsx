import React from "react";

export default function Modal3Team({
  setIsOpen3,
  setIsOpen4,
setDao
}) {
  // const option = (e) => {
  //   setIsOpen3(false);
  //   console.log("tikladi");
  // };
  return (
    <div>
      <div className="text-3xl font-bold text-gray-200 ml-20 mb-2">
        Team Members:
      </div>
      <div className="bg-white/20 p-4 ml-20 mr-20 rounded-lg">
        <div className="grid grid-rows-3">
          <div className="flex justify-center">
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
                Status
              </label>
            </div>
            <div class="flex items-start m-2">
              <input
                onChange={(e) => setDao((prev)=>({...prev,status:e.target.value}))}
                type="text"
                id="base-input"
                placeholder="status"
                class="bg-white/20 border-2 
                  border-sky-200 text-md rounded-lg 
                  text-stone-200 block w-full p-2.5"
              />
            </div>
          </div>
          <div class=" grid col-rows-2 mt-4">
            <div className="flex justify-start">
              <label
                for="base-input"
                class="block m-2 text-2xl font-bold text-sky-200 "
              >
                Wallet
              </label>
            </div>
            <div class="flex items-start m-2">
              <input
                onChange={(e) => setDao((prev)=>({...prev,wallet:e.target.value}))}

                type="text"
                id="base-input"
                placeholder="wallet"
                class="bg-white/20 border-2 
                  border-sky-200 text-md rounded-lg 
                  text-stone-200 block w-full p-2.5"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transparent  mr-40 ml-40 rounded-lg mb-3">
        <button
          onClick={ ()=>  setIsOpen3(false)}
          type="button"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 
       focus:ring-4 focus:outline-none focus:ring-blue-300 
       font-medium rounded-lg text-md px-5 py-2.5 text-center 
       inline-flex items-center justify-center"
        >
          Back
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
        </button>
      </div>
      <div className="bg-transparent mt-10 mr-40 ml-40 rounded-lg">
        <button
          onClick={(e) => {
            setIsOpen4(true);
           
          }}
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
  );
}
