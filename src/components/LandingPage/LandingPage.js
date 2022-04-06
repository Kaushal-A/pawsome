import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import dog from "../../assets/dog.svg";
import axios from "axios";

export const LandingPage = () => {
  // const [data, setData] = useState({
  //   getData: [],
  // });

  // useEffect(() => {
  //   axios
  //     .get("https://samarthbackend.herokuapp.com/findSpecificJob?limit=6")
  //     .then((response) => {
  //       setData({
  //         getData: response.data.data.jobs,
  //       });
  //       console.log(response.data.data.jobs);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="mt-16">
      <h1 className="text-7xl font-bold tracking-normal text-center text-black">
        Choose from{" "}
        <span className="text-7xl font-bold tracking-normal text-center text-green-600 my-8">
          Various pets
        </span>{" "}
      </h1>
      <div class="flex flex-col bg-white m-auto p-auto my-8">
        <div class="flex overflow-x-scroll pb-10 overflow-x-hidden ">
          <div class="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
            <div className="inline-block px-3">
              <div className="w-64 h-75 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img alt="" src={dog} className="p-4"></img>
                <div className="align-center">
                  <h1 className="p-3 mx-3">Jerry</h1>
                  <p className="p-3 ml-3">6 Months</p>
                </div>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-75 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img alt="" src={dog} className="p-4"></img>
                <div className="align-center">
                  <h1 className="p-3 mx-3">Jerry</h1>
                  <p className="p-3 ml-3">6 Months</p>
                </div>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-75 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img alt="" src={dog} className="p-4"></img>
                <div className="align-center">
                  <h1 className="p-3 mx-3">Jerry</h1>
                  <p className="p-3 ml-3">6 Months</p>
                </div>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-75 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img alt="" src={dog} className="p-4"></img>
                <div className="align-center">
                  <h1 className="p-3 mx-3">Jerry</h1>
                  <p className="p-3 ml-3">6 Months</p>
                </div>
              </div>
            </div>
            <div className="inline-block px-3">
              <div className="w-64 h-75 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <img alt="" src={dog} className="p-4"></img>
                <div className="align-center">
                  <h1 className="p-3 mx-3">Jerry</h1>
                  <p className="p-3 ml-3">6 Months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
