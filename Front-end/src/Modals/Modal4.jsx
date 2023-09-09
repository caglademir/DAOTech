import React from "react";

export default function Modal4({
  setIsOpen4,
  setIsOpen5,
setDao
}) {

 const prevPage = () =>{
  setIsOpen4(false);
 }

  return (
    <div>
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
            <div className="flex justify-center">
              <label
                for="base-input"
                class="block m-2 text-2xl font-bold text-blue-900 "
              >
                Contrat Address
              </label>
            </div>
            <div class="flex items-start m-2">
              <input
                onChange={(e) => setDao((prev)=>({...prev,contratAddress:e.target.value}))}

                type="text"
                id="base-input"
                placeholder="Contrat Address"
                class="bg-white/20 border-2 
                  border-blue-900 text-md rounded-lg 
                  text-stone-200 block w-full p-2.5"
              />
            </div>
          </div>
          <div class=" grid col-rows-2 mt-4">
            <div className="flex justify-center">
              <label
                for="base-input"
                class="block m-2 text-2xl font-bold text-blue-900 "
              >
                Collection Name
              </label>
            </div>
            <div class="flex items-start m-2">
              <input
                onChange={(e) => setDao((prev)=>({...prev,collectionName:e.target.value}))}
                type="text"
                id="base-input"
                placeholder="Collection Name"
                class="bg-white/20 border-2 
                  border-blue-900 text-md rounded-lg 
                  text-stone-200 block w-full p-2.5"
              />
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
          onClick={() => {
            console.log("tiklandi");
            setIsOpen5(true);
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

    </div>
  );
}
