import React, { useState } from "react";

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const openAcoordion = (id) => {
    switch (id) {
      case 1:
        setIsOpen(!isOpen);
        break;
      case 2:
        setIsOpen1(!isOpen1);
        break;
      case 3:
        setIsOpen2(!isOpen2);
    }
  };
  return (
    <div className="p-8" id="questions">
      <h2 className="text-center text-8xl font-medium text-sky-200 mt-16">
        Frequently Asked Questions
      </h2>

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
            border border-2 border-gray-900 rounded-t-lg"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Flowbite?</span>
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
          className={` ${isOpen ? "hidden" : ""}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 bg-sky-950">
            <p class="mb-2 text-gray-200 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p class="text-gray-200 dark:text-gray-400">
              Check out this guide to learn how to get started and start
              developing websites even faster with components on top of Tailwind
              CSS.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            onClick={() => openAcoordion(2)}
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-200
           bg-gray-900 hover:bg-gray-950 dark:hover:bg-gray-950
           border border-2 border-gray-900"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Figma file available?</span>
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
          class={`${isOpen1 ? "hidden" : ""}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-5 bg-sky-950 dark:border-gray-700">
            <p class="mb-2 text-gray-200 dark:text-gray-400">
              Flowbite is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file.
            </p>
            <p class="text-gray-200 dark:text-gray-400">
              Check out the Figma design system based on the utility classes
              from Tailwind CSS and components from Flowbite.
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            onClick={() => openAcoordion(3)}
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium text-left 
          text-gray-200 bg-gray-900 hover:bg-gray-950 border border-2 border-gray-900"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>
              What are the differences between Flowbite and Tailwind UI?
            </span>
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
          class={`${isOpen2 ? "hidden" : ""}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div class="p-5 bg-sky-950 rounded-b-lg border border-2 border-gray-900">
            <p class="mb-2 text-gray-200 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p class="mb-2 text-gray-200 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
