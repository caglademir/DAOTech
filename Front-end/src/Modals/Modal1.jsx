import React from "react";

export default function Modal1({
  setIsOpen1,
  setDaoName,
  setDaoSymbol,
  daoName,
  daoSymbol,
}) {
  const handleNextClick = () => {
    if (!daoName || !daoSymbol) {
      alert("Please fill out all inputs!");

      return;
    }
    setIsOpen1(true);
  };

  return (
    <div className="">
      <div className="bg-white/10 p-4 rounded-lg ml-20 mr-20">
        <div class="flex items-center justify-center">
          <label
            for="dropzone-file"
            class="flex flex-col items-center justify-center w-[19%]  
                                        border-2 border-gray-300 border-dashed rounded-full bg-transparent
                                        bg-white/25"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-200 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-center text-gray-200 ">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
          <div class="ml-4 space-y-0.5 text-lg font-bold text-blue-400 text-left">
            <div>{daoName}</div>
            <div class=" text-gray-500 dark:text-blue-300">{daoSymbol}</div>
          </div>
        </div>
      </div>

      <div className="bg-white/10 p-2 rounded-lg mt-10 mr-20 ml-20">
        <div class="m-2">
          <label
            for="base-input"
            class="block mb-2 text-lg font-bold text-blue-500 "
          >
            DAO Symbol
          </label>
          <input
            onChange={(e) => setDaoSymbol(e.target.value)}
            type="text"
            id="base-input"
            placeholder="DAO"
            class="bg-white/25 border-2 border-blue-500 text-md rounded-lg 
                                              text-stone-200 block w-full p-2.5 "
          />
        </div>
      </div>
      <div className="bg-white/10 p-2 rounded-lg mt-10 mr-20 ml-20">
        <div class="m-2">
          <label
            for="base-input"
            class="block mb-2 text-lg font-bold text-blue-500 "
          >
            DAO Name
          </label>
          <input
            onChange={(e) => setDaoName(e.target.value)}
            type="text"
            id="base-input"
            placeholder="DAO Tech"
            class="bg-white/25 border-2 border-blue-500 text-md rounded-lg 
                                              text-stone-200 block w-full p-2.5 "
          />
        </div>
      </div>
      <div className="">
        <button
          onClick={handleNextClick}
          type="button"
          class="w-[40%] text-white bg-blue-700 hover:bg-blue-800 
                                    font-medium rounded-lg text-md px-5 py-2.5 text-center 
                                    inline-flex items-center justify-center float-right mt-4 mb-6 mr-20"
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
