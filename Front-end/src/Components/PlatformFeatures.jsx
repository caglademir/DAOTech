import React from "react";


export default function () {
  return (
    <div id="platformFeatures">
      <div className="p-16">
        <h2 className="text-center text-9xl font-medium text-sky-200 p-4 mb-10">
         PlatformFutures
        </h2>
        <div className="grid grid-cols-5 xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2">
          <div className="bg-white/20 rounded-lg p-8 grid rows-3 border hover:border-4 border-sky-400">
            <div className="h-10 flex justify-center bg-sky-950 rounded-full border-2 border-sky-400 mb-4"></div>
            <div>
              <h4 className="text-2xl font-bold text-blue-400 text-left ">
                Rapid DAO Creation:
              </h4>
            </div>
            <div>
              <p className="text-left text-sky-200">
                Users can rapidly create their own DAOs with simple tools. This
                allows them to guide their projects and bring their communities
                together.
              </p>
            </div>
          </div>

          <div className="bg-white/20 rounded-lg p-8 grid rows-3 border hover:border-4 border-sky-400">
            <div className="h-10 flex justify-center bg-sky-950  rounded-full border-2 border-sky-400 mb-4"></div>
            <h4 className="text-2xl font-bold text-blue-400 text-left ">
              Crowdfunding Supported by Smart Contracts:{" "}
            </h4>
            <p className="text-left text-sky-200">
              DAOs can initiate secure crowdfunding campaigns supported by smart
              contracts. Funds are collected and managed securely.
            </p>
          </div>

          <div className="bg-white/20 rounded-lg p-8 grid rows-3 border hover:border-4 border-sky-400">
            <div className="h-10 flex justify-center bg-sky-950  rounded-full border-2 border-sky-400 mb-4"></div>
            <h4 className="text-2xl font-bold text-blue-400 text-left ">
              Transparent Voting System:
            </h4>
            <p className="text-left text-sky-200">
              The platform provides users with a fair and transparent voting
              system for ideas, suggestions, and projects. Community members
              collectively determine the future of projects.
            </p>
          </div>

          <div className="bg-white/20 rounded-lg p-8 grid rows-3 border hover:border-4 border-sky-400">
            <div className=" h-10 flex justify-center bg-sky-950 rounded-full border-2 border-sky-400 mb-4"></div>
            <h4 className="text-2xl font-bold text-blue-400 text-left ">
              Effective Communication Platform:{" "}
            </h4>
            <p className="text-left text-sky-200">
              An integrated communication platform enables DAO members to
              communicate and collaborate effectively. Private spaces provide an
              environment for idea exchange and project development.
            </p>
          </div>

          <div className="bg-white/20 rounded-lg p-8 grid rows-3 border hover:border-4 border-sky-400">
            <div className="h-10 flex justify-center bg-sky-950  rounded-full border-2 border-sky-400 mb-4"></div>
            <h4 className="text-2xl font-bold text-blue-400 text-left ">
              Engagement-Incentivizing Membership System:
            </h4>
            <p className="text-left text-sky-200">
              DAO membership can be earned through contributions or by
              purchasing shares. This encourages a more active and participatory
              community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

