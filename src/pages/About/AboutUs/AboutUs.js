import React from "react";
import { Navbar } from "../../../pages/About/Navbar/Navbar";
import "./AboutUs.css";
import CombinedImage from "../../../assets/CombinedImage.svg";
import Left_One from "../../../assets/Left_One.svg";
import Middle from "../../../assets/Middle.svg";
import howtoUse from "../../About/Categories/Categories";
export const AboutUs = () => {
  return (
    <>
      <Navbar />

      <div className="bg-indigo-50 pt-16"></div>
      <div className="bg-white py-5 mt-10">
        <h2 className="text-6xl text-center font-bold tracking-wide">
          About{" "}
          <span className="text-6xl text-center font-bold tracking-wide text-indigo-600">
            Us
          </span>
        </h2>
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4">
            <p className="text-center text-2xl mt-10">
              Pawsome is a project that aims to provide a facility through which
              people who are looking for a pet for adoption can connect with the
              pets that are available for adoption.{" "}
            </p>

            <p className="text-center text-2xl mt-10">
              This idea came to us after thoroughly analyzing the stats of
              abandoning pets which happened during the covid period. There are
              about 80 million homeless pets in India who require a loving and
              caring owner.
            </p>
          </div>
        </div>
        <img src={CombinedImage} alt="img" className="mt-20 ml-32 h-96" />
      </div>
      <div className="bg-indigo-50 pt-5 mt-10">
        <h2 className="text-6xl text-center font-bold tracking-wide mt-10">
          Our{" "}
          <span className="text-6xl text-center font-bold tracking-wide text-indigo-600 mt-10">
            Mission
          </span>
        </h2>
        <div className="grid grid-cols-6 gap-4">
          <img src={Left_One} alt="img" className="mt-20 h-96" />
          <div className="col-start-2 col-span-4">
            <p className="text-center text-2xl mt-10">
              Around 80 million homeless pets, wander around all over India
              looking for food and water, which is one the most basic
              requirement for an animal to survive. Proper love and care is also
              a thing which all pets deserve to get.
            </p>

            <p className="text-center text-2xl mt-10">
              Therefore, at PawSome our mission is to be a helping hand in
              providing the pets with owners that can take proper care of them
              and provide them with all the basic necessities' that they
              require.
            </p>
          </div>
          <img src={Middle} alt="img" className="mt-20 h-96" />
        </div>
      </div>
      <div className="bg-white py-5 mt-10">
        <howtoUse />
      </div>
      <howtoUse />
      <div className="bg-indigo-50 pt-16"></div>
    </>
  );
};
