import React from "react";
import { Navbar } from "./Navbar/Navbar";

import { JobsLists } from "./JobsLists";

export const Jobs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-indigo-50 pt-16"></div>
      <div className="grid gap-4 bg-indigo-50  py-20 pr-4 ">
        <div className="col-span-2 px-3">
          <JobsLists />
        </div>
      </div>
    </>
  );
};
