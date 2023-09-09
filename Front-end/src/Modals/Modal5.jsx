import React from "react";
import { useNavigate } from "react-router-dom";

export default function Modal5({ allDaoInformation, setIsOpen5, setIsOpen4 }) {

  const navigate=useNavigate();
  
  const handleDaoClick = () => {
    localStorage.setItem("created-dao", JSON.stringify(allDaoInformation));
    navigate('/dao')
  };

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
            <div className="flex justify-start">
              <label
                for="base-input"
                class="block m-2 text-2xl font-bold text-blue-400 "
              >
                DAO SYMBOL
              </label>
            </div>
            <div class="flex items-start m-2 bg-white/20 rounded-lg p-2 text-gray-200">
              DAO Symbol
            </div>
          </div>
          <div class=" grid col-rows-2 mt-4">
            <div className="flex justify-start">
              <label
                for="base-input"
                class="block m-2 text-2xl font-bold text-blue-400 "
              >
                DAO NAME
              </label>
            </div>
            <div class="flex items-start m-2 bg-white/20 rounded-lg p-2 text-gray-200">
              {allDaoInformation.name}
            </div>
          </div>
          <div class=" grid col-rows-2 mt-4">
            <div className="flex justify-start">
              <label
                for="base-input"
                class="block m-2 text-2xl font-bold text-blue-400 "
              >
                DAO MEMBERS
              </label>
            </div>
            <div class="flex items-start m-2 bg-white/20 rounded-lg p-2 text-gray-200">
              DAO Members
            </div>
          </div>
        </div>
      </div>
      <div className="bg-transparent  mr-40 ml-40 rounded-lg mb-3">
        <button
          onClick={() => setIsOpen5(false)}
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
          type="button"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 
            focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-md px-5 py-2.5 text-center 
            inline-flex items-center justify-center"
          onClick={handleDaoClick}
        >
          Create DAO
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
