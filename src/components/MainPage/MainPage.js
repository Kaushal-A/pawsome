import React from "react";
import Left from "../../assets/g12.svg";

// import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  // const searchjob = React.createRef();
  // const searchlocation = React.createRef();
  // let navigate = useNavigate();
  // function navigation() {
  //   navigate("/SearchJobs");
  // }

  // const [data, setData] = useState({
  //   getData: [],
  // });

  // console.log(data);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   sessionStorage.setItem("location", searchlocation.current.value);
  //   sessionStorage.setItem("job", searchjob.current.value);
  //   navigation();

  //   if (searchjob.current.value === "") {
  //     axios
  //       .post("https://samarthbackend.herokuapp.com/findAllJobPos", {
  //         "jobInfo.location": searchlocation.current.value,
  //       })
  //       .then((response) => {
  //         setData({
  //           getData: response.data.data.jobs,
  //         });
  //         console.log(response.data.data.jobs);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else if (searchlocation.current.value === "") {
  //     axios
  //       .post("https://samarthbackend.herokuapp.com/findAllJobPos", {
  //         "jobInfo.title": searchjob.current.value,
  //       })
  //       .then((response) => {
  //         setData({
  //           getData: response.data.data.jobs,
  //         });
  //         console.log(response.data.data.jobs);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   } else {
  //     axios
  //       .post("https://samarthbackend.herokuapp.com/findAllJobPos", {
  //         "jobInfo.title": searchjob.current.value,
  //         "jobInfo.location": searchlocation.current.value,
  //       })
  //       .then((response) => {
  //         setData({
  //           getData: response.data.data.jobs,
  //         });
  //         console.log(response.data.data.jobs);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  return (
    <section id="hero">
      <div className="container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row">
        <div className="flex flex-col mb-32  md:w-1/2 px-10 py-10 mx-4 my-6 py-4 ml-10">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left my-7 py-3">
            Dont buy, Adopt
          </h1>
          <br></br>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left text-2xl">
            Surf through our website and find a companion who follows you in all
            walks of your life. Be it be a Loyal paw or an adorable one. You can
            find them all here !!
          </p>
          <br></br>
          <div className="flex justify-center md:justify-start">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-8 rounded">
              Adopt Now
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={Left} alt="" />
        </div>
      </div>
    </section>
  );
};
