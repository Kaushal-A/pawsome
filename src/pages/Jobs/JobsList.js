import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import DogJerry from "../../assets/dogJerry.svg";
import Bookmark from "../../assets/Bookmark.svg";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AccessibleForwardOutlinedIcon from "@mui/icons-material/AccessibleForwardOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url('../../assets/dogJerry.svg')` }}
              title="Woman holding a mug"
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="fill-current text-gray-500 w-3 h-3 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  Can coffee make you a better developer?
                </div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div
                className="w-10 h-10 rounded-full mr-4"
                src="/img/jonathan.jpg"
                alt="Avatar of Jonathan Reinink"
              >
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p className="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
