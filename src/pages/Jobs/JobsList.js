import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DogJerry from "../../assets/dogJerry.svg";

export const JobsList = () => {
  let location = useLocation();
  // console.log(location.state);
  console.log(location.state.disabilityType);

  const [data, setData] = useState({
    getData: [],
  });

  useEffect(() => {
    axios
      .post("https://samarthbackend.herokuapp.com/findAllJobPos", {
        "jobInfo.disabilityType": location.state.disabilityType,
      })
      .then((response) => {
        setData({
          getData: response.data.data.jobs,
        });
        console.log(response.data.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      {data.getData.map((job) => {
        return (
          <div className="container mx-5 my-2">
            <div className="flex flex-wrap p-4 bg-green-100 rounded-xl">
              <div>
                <img alt="" src={DogJerry} className="h-40 mr-4 rounded-xl"></img>
              </div>
              <div className="flex flex-wrap flex-col mx-5">
                <div className="mt-3 text-3xl font-bold tracking-normal text-black">
                  Jerry
                </div>
                <div className="text-xl">-Labrador</div>
                <div className="flex gap-x-8 mt-4 justify-around  text-center">
                  <div className="h-20 w-20 rounded-xl text-white bg-green-500 align-middle pt-3 ">
                    Age
                    <h2 className="text-1xl font-bold text-white">2 Years</h2>
                  </div>
                  <div className="h-20 w-20 rounded-xl text-white bg-green-500 align-middle pt-3 ">
                    Weight
                    <h2 className="text-1xl font-bold text-white">4.5 Kg</h2>
                  </div>
                  <div className="h-20 w-20 rounded-xl text-white bg-green-500 align-middle pt-3 ">
                    Sex
                    <h2 className="text-1xl font-bold">M</h2>
                  </div>
                  <button className="h-20 w-40 rounded-2xl text-white font-bold bg-green-500 align-middle ">
                    Adopt Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
