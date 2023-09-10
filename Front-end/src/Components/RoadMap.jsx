import React from "react";

export default function RoadMap() {
  return (
    <div id="roadMap">
      <h2 className="text-center text-9xl font-anton text-sky-200 p-8  ">
        RoadMap
      </h2>

      <section class=" dark:text-gray-100">
        <div class="container max-w-5xl px-4 py-12 mx-auto">
          <div class="grid gap-4 mx-4 sm:grid-cols-12">
            <div class="col-span-12 sm:col-span-3">
              <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-sky-200">
                <h3 class="text-3xl font-anton">DAO Tech</h3>
                <span class="text-sm  tracking-wider uppercase dark:text-gray-400 font-anton">
                  ROADMAP
                </span>
              </div>
            </div>
            <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-200 transition duration-0 ">
                  <h3 class="text-xl font-anton tracking-wide text-sky-200 ">
                    Building the Foundation
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400 font-anton">
                    Phase 1
                  </time>
                  <p class="mt-3 font-anton">
                    User registration and login are established. An interface
                    for creating DAOs is integrated. Basic funding system is
                    supported by smart contracts. Users can create profiles to
                    showcase their interests and skills.
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-200">
                  <h3 class="text-xl  tracking-wide text-sky-200 font-anton">
                    Strengthening Communication and Collaboration
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400 font-anton">
                    Phase 2
                  </time>
                  <p class="mt-3 font-anton">
                    An internal communication platform promotes effective
                    discussions among DAO members. Collaboration tools are
                    improved for sharing ideas and forming partnerships.
                    Customizable discussion forums are created.
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-200">
                  <h3 class="text-xl font-anton tracking-wide text-sky-200">
                    Smart Contracts and Advanced Voting
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400 font-anton">
                    Phase 3
                  </time>
                  <p class="mt-3 font-anton">
                    Smart contracts expand to include complex funding models and
                    payment plans. Users can closely track project progress
                    using smart contracts. Enhanced voting options offer
                    flexibility and fairness.
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-200">
                  <h3 class="text-xl font-anton tracking-wide text-sky-200">
                    Innovation and Accessibility
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400 font-anton">
                    Phase 4
                  </time>
                  <p class="mt-3 font-anton">
                    Multi-language support enhances the platform's reach.
                    Ongoing security and performance improvements for smart
                    contracts. User feedback and data analysis drive continuous
                    enhancements.
                  </p>
                </div>
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-sky-200">
                  <h3 class="text-xl font-anton tracking-wide text-sky-200">
                    Governance and Long-Term Growth
                  </h3>
                  <time class="text-xs tracking-wide uppercase dark:text-gray-400 font-anton">
                    Phase 5
                  </time>
                  <p class="mt-3 font-anton">
                    Decentralized governance empowers DAO members to shape the
                    platform's future. The platform evolves with the consensus
                    of DAO members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
