import React, { useState } from "react";

export default function Modal2({ setIsOpen2, setIsOpen3 }) {
  const [options, setOptions] = useState();

  const option = (e) => {
    setOptions(e.target.value);
    console.log(options);
  };

  const ways = (e) => {
    console.log(options);
    if (options === "CA") {
      setIsOpen2(true);
      console.log("tiklandi");
    } else if (options === "US") {
      setIsOpen3(true);
    }
  };

  return (
    <div>
      <div className="bg-white/20 p-4 mr-40 ml-40 mt-40 mb-10 rounded-lg border-2">
        <label for="large" class="block mb-2 text-2xl font-bold text-sky-200">
          Add Council Member
        </label>
        <select
          onChange={option}
          id="large"
          class="block w-full px-4 py-3 text-lg text-gray-800 border border-sky-200 
          rounded-lg bg-white/30 focus:ring-blue-500 focus:border-blue-500"
        >
          <option selected disabled>
            Choose a status
          </option>
          <option value="US">Team member</option>
          <option value="CA">DAO member</option>
        </select>
        <div className="">
            <label
              for="base-input"
              class="block mt-2 mb-2 text-2xl font-bold text-sky-200 "
            >
              Number of Members
            </label></div>
            <div class="flex items-start">
            <input
              type="text"
              id="base-input"
              placeholder="Number of Members"
              class="bg-white/20 border-2 
                  border-sky-200 text-md rounded-lg 
                  text-stone-200 block w-full p-2.5"/>
            </div>
      </div>
      
      <div className="bg-transparent  mr-40 ml-40 rounded-lg">
        <button
          onClick={ways}
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
