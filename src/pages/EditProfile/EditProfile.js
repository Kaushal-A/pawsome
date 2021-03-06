import React from "react";
import { Navbar } from "../EditProfile/Navbar/Navbar";
import "./EditProfile.css";
import Profile from "../../assets/Profile.svg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
  const fullname = React.createRef();
  const email = React.createRef();
  const contact = React.createRef();
  const aboutyou = React.createRef();
  const domains = React.createRef();
  const experiences = React.createRef();
  const npwd = React.createRef();
  const cpwd = React.createRef();

  let navigate = useNavigate();
  function navigation() {
    navigate("/dashboard");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    var auth = sessionStorage.getItem("token");
    console.log(auth);
    // axios.patch("https://samarthbackend.herokuapp.com/updateUser", {
    //     name:fullname.current.value,
    //     email:email.current.value,
    //     contact:contact.current.value,
    //     aboutYou:aboutyou.current.value,
    //     domain:domains.current.value,
    //     exp:Number(experiences.current.value),
    //     linUrl:linkedin.current.value,
    //     portLink:portfolio.current.value,
    //     password:npwd.current.value,
    // }, {
    //     headers: {
    //         Authorization: "Bearer " + auth,
    //     }
    // }).then((response) => {
    //     console.log(response);
    //     console.log(response.status);
    //     if (response.status == 201) {
    //         navigation();
    //     }
    // }).catch((err) => {
    //     console.log(err);
    //     // console.log(err.response.status);
    //     // if (err.response.status == 400) {
    //     //     swal("ERROR!", "Use valid Username/Password!", "error");
    //     // }
    // })

    axios
      .get("https://samarthbackend.herokuapp.com/readUser", {
        headers: {
          Authorization: "Bearer " + auth,
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.data._id);
        const id = response.data.data._id;
        axios
          .patch(
            `https://samarthbackend.herokuapp.com/updateUser/${id}`,
            {
              name: fullname.current.value,
              email: email.current.value,
              contact: contact.current.value,
              aboutYou: aboutyou.current.value,
              domain: domains.current.value,
              exp: Number(experiences.current.value),
              password: npwd.current.value,
            },
            {
              headers: {
                Authorization: "Bearer " + auth,
              },
            }
          )
          .then((response) => {
            console.log(response);
            console.log(response.status);
            if (response.status === 201) {
              navigation();
            }
          })
          .catch((err) => {
            console.log(err);
            console.log(err.response.status);
            // if (err.response.status == 400) {
            //     swal("ERROR!", "Use valid Username/Password!", "error");
            // }
          });
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.status);
      });
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="bg-indigo-50 py-1">
        <div className="text-center mt-16">
          <h2 className="text-black text-6xl font-bold tracking-wide">
            Edit{" "}
            <span className="text-indigo-700 font-bold text-6xl tracking-wide">
              Profile
            </span>
          </h2>
        </div>
        <div className="justify-center w-11/12 h-full bg-white my-14 mx-14 py-10">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-row flex-wrap">
              <div>
                <img src={Profile} alt="img" className="mt-10 ml-10 h-28" />
              </div>
              <div>
                <button className="bg-indigo-700 hover:bg-indigo-700 text-white font-bold rounded ml-10 px-8 py-3 mt-16">
                  Update Image
                </button>
                <button className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded ml-10 py-3 px-8">
                  Remove Image
                </button>
              </div>
            </div>
            <div className="mb-2 mt-6">
              <label className="mb-2 text-xl block ml-10">Full Name</label>
              <input
                type="text"
                className="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500"
                placeholder="Your Name"
                ref={fullname}
              />
            </div>

            <div className="grid grid-cols-6 gap-8 mb-2 mt-4">
              <div className="col-span-6 sm:col-span-3">
                <label className="my-2 text-xl block ml-10">Email</label>
                <input
                  type="text"
                  className="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500"
                  placeholder="Your Name"
                  ref={email}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="my-2 text-xl block ml-10">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500"
                  placeholder="Your Name"
                  ref={contact}
                />
              </div>
            </div>

            <div className="mb-2 mt-6">
              <label className="my-2 text-xl block ml-10">About You</label>
              <textarea
                type="text"
                className="p-2 rounded-lg block w-11/12 ml-10 pb-20 border-2 border-gray-500"
                placeholder="Your Name"
                ref={aboutyou}
              />
            </div>

            <div className="ml-10">
              <h2 className="text-indigo-600 font-bold text-3xl tracking-wide mt-10">
                Edit Password
              </h2>
            </div>
            <div
              id="exper/location"
              className="grid grid-cols-6 gap-8 mb-2 mt-4"
            >
              <div className="col-span-6 sm:col-span-3">
                <label className="my-2 text-xl block ml-10">New Password</label>
                <input
                  type="password"
                  className="p-2 rounded-lg block w-11/12 ml-10 border-2 border-gray-500"
                  placeholder="Your Name"
                  ref={npwd}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="my-2 text-xl block ml-10">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  className="p-2 rounded-lg block w-10/12 ml-10 border-2 border-gray-500"
                  placeholder="Your Name"
                  ref={cpwd}
                />
              </div>
            </div>
            <div className="flex flex-row flex-wrap">
              <div>
                <button
                  className="bg-indigo-700 hover:bg-indigo-700 text-white font-bold rounded ml-10 px-8 py-3 mt-16"
                  type="submit"
                >
                  Save Changes
                </button>
                <button className="bg-transparent text-indigo-700 font-bold border border-indigo-700 border-2 rounded ml-10 py-3 px-8">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
