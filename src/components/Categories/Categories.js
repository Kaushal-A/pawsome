import "./Categories.css";
import Visually from "../../assets/Visually.svg";
import Hearing from "../../assets/Hearing.svg";
import WheelChair from "../../assets/WheelChair.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const Categories = () => {
  const [data, setData] = useState({
    getData: [],
  });

  console.log(data);

  useEffect(() => {
    axios
      .post("https://samarthbackend.herokuapp.com/findAllJobPos")
      .then((response) => {
        setData({
          getData: response.data.data.jobs,
        });
        console.log(response.data.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="mt-16">
        <h1 className="text-7xl font-bold tracking-normal text-center text-black">
          How it{" "}
          <span className="text-7xl font-bold tracking-normal text-center text-green-600">
            Works
          </span>{" "}
          ?
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-4 ml-14">
        <Link to="/Jobs" state={{ disabilityType: "visually impaired" }}>
          <div class="max-w-sm rounded-2xl overflow-hidden border-green-700 border-2 mt-8">
            <div class="px-6 py-4">
              <img src={Hearing} alt="img" className="float-center ml-28" />
              <div class="font-bold text-2xl mb-2 mt-4 text-center text-green-700">
                Choose a Pet
              </div>
              <p class="text-gray-700 text-base text-center font-semibold">
                From the plethora of options available on our website choose the
                pet whose profile suits your interest.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Jobs" state={{ disabilityType: "hard of hearing" }}>
          <div class="max-w-sm rounded-2xl overflow-hidden border-green-700 border-2 mt-8">
            <div class="px-6 py-4">
              <img src={Visually} alt="img" className="float-center ml-28" />
              <div class="font-bold text-2xl mb-2 mt-4 text-center text-green-700">
                Contact Shelter Home
              </div>
              <p class="text-gray-700 text-base text-center font-semibold">
                Contact the shelter home to know more about the pet, and to hear
                their stories from the owner itself.
              </p>
            </div>
          </div>
        </Link>
        <Link to="/Jobs" state={{ disabilityType: "wheelchair bound" }}>
          <div class="max-w-sm rounded-2xl overflow-hidden border-indigo-700 border-2 mt-8">
            <div class="px-6 py-4">
              <img src={WheelChair} alt="img" className="float-center ml-28" />
              <div class="font-bold text-2xl mb-2 mt-4 text-center text-green-700">
                Adopt
              </div>
              <p class="text-gray-700 text-base text-center font-semibold">
                Finalize everything from your side and Bon A-pet-treat! You
                adopted a pet.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
