import React, { useState } from "react";


export default function
  () {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [isOpen4, setIsOpen4] = useState(false)
  const [isOpen5, setIsOpen5] = useState(false)
 

  const openAcoordion = (id) => {
    switch (id) {
      case 1: setIsOpen(!isOpen)
        break;
      case 2: setIsOpen1(!isOpen1)
        break;
      case 3: setIsOpen2(!isOpen2)
        break;
      case 4: setIsOpen3(!isOpen3)
        break;
      case 5: setIsOpen4(!isOpen4)
        break;
      case 6: setIsOpen5(!isOpen5)
    }
  }
  return (
    <div id="FAQ" className='p-8'>
      <h2 className='text-center text-9xl font-medium text-sky-200 mt-16'>Frequently Asked Questions</h2>


      <div id="accordion-collapse" data-accordion="collapse" className="p-24">
        <h2
          id="accordion-collapse-heading-1"
          className="bg-gray-900 rounded-t-lg"
        >
          <button
            onClick={() => openAcoordion(1)}
            type="button"
            class="flex items-center justify-between w-full p-5 
            font-medium text-left text-gray-200 hover:bg-gray-950
            border-b border-gray-600 rounded-t-lg"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"

            aria-controls="accordion-collapse-body-1">

            <span>What is DAOTech and why was it established?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"

          className={` ${isOpen ? 'hidden' : ''}`}
          aria-labelledby="accordion-collapse-heading-1">
          <div class="p-5 bg-sky-950">
            <p
              class="mb-2 text-gray-200 dark:text-gray-400">
              DAOTech is a platform designed to facilitate the creation and management
               of community-focused DAOs (Decentralized Autonomous Organizations). 
               Its primary purpose is to assist users in bringing their projects to 
               life, bringing communities together, and fostering innovation.</p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            onClick={() => openAcoordion(2)}
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-200
           bg-gray-900 hover:bg-gray-950 dark:hover:bg-gray-950
           border-b border-gray-600  "
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"

            aria-controls="accordion-collapse-body-2">

            <span>What are the features of DAOTech?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"

          class={`${isOpen1 ? 'hidden' : ''}`}
          aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 bg-sky-950 dark:border-gray-700">
            <p
              class="mb-2 text-gray-200 dark:text-gray-400">
              The platform provides users with the ability to easily create DAOs, 
              launch crowdfunding campaigns, establish fair voting systems, and engage 
              in effective communication. Additionally, DAO membership can be earned 
              through contributions or purchasing shares.</p>

          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            onClick={() => openAcoordion(3)}
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-200
           bg-gray-900 hover:bg-gray-950 dark:hover:bg-gray-950
           border-b border-gray-600"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"

            aria-controls="accordion-collapse-body-3">

            <span>What is the project roadmap, and what stages will it go through?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"

          class={`${isOpen2 ? 'hidden' : ''}`}
          aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 bg-sky-950 dark:border-gray-700">
            <p
              class="mb-2 text-gray-200 dark:text-gray-400">
             In Phase 1, the foundational infrastructure will be established,
              user-friendly interfaces and basic funding systems will be integrated.</p>
            <p
              class="mb-2 text-gray-200 dark:text-gray-400">
            Next, in Phase 2, communication and participation will be strengthened,
             and collaboration tools will be developed. In subsequent stages, smart 
             contracts and advanced voting options will be added, the platform will 
             be opened to international users, and decentralized governance mechanisms 
             will be established.</p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-4">
          <button
            onClick={() => openAcoordion(4)}
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-200
           bg-gray-900 hover:bg-gray-950 dark:hover:bg-gray-950
           border-b border-gray-600"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"

            aria-controls="accordion-collapse-body-4">

            <span>What is DAOTech's vision?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-4"

          class={`${isOpen3 ? 'hidden' : ''}`}
          aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 bg-sky-950 dark:border-gray-700">
            <p
              class="mb-2 text-gray-200 dark:text-gray-400">
              DAOTech serves as a platform that encourages individuals to shape 
              their visions through collaboration, democratizes community 
              participation, and promotes innovation. By combining innovation, 
              inclusivity, and visionary technology, it supports transformative 
              projects and vibrant communities.</p>
          
          </div>
        </div>
        <h2 id="accordion-collapse-heading-5">
          <button
            onClick={() => openAcoordion(5)}
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-200
           bg-gray-900 hover:bg-gray-950 dark:hover:bg-gray-950
           border-b border-gray-600"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"

            aria-controls="accordion-collapse-body-5">

            <span>How can I participate in DAOTech?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-5"

          class={`${isOpen4 ? 'hidden' : ''}`}
          aria-labelledby="accordion-collapse-heading-2">
          <div class="p-5 bg-sky-950 dark:border-gray-700">
            <p
              class="mb-2 text-gray-200 dark:text-gray-400">
              To join DAOTech, you can create your own DAO using the platform's 
              user-friendly interface or contribute to existing DAOs. Additionally,
               DAO membership can be earned through contributions or by purchasing shares.</p>
         
          </div>
        </div>
        <h2 id="accordion-collapse-heading-6">
          <button
            onClick={() => openAcoordion(6)}
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left 
          text-gray-200 bg-gray-900 hover:bg-gray-950 border-b border-gray-600"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"

            aria-controls="accordion-collapse-body-6">
            <span>How can I stay informed about project developments?</span>
            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />

            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-6"

          class={`${isOpen5 ? 'hidden' : ''}`}
          aria-labelledby="accordion-collapse-heading-3">
          <div class="p-5 bg-sky-950 rounded-b-lg border border-2 border-gray-900">
            <p
              class="mb-2 text-gray-200 dark:text-gray-400">
              To monitor project development and contribute, you can track smart 
              contracts in more detail. You can also access up-to-date information 
              through DAOTech's official communication channels.</p>
           

          </div>
        </div>
        
      </div>
    </div>
  );
}
