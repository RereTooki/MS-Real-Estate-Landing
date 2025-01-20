import React from "react";
import "../App.css";
import introImg from "../assets/images/Intro.png";
import NavigationBar from "./NavigationBar";

const Landing = () => {
  return (
    <>
      <div className="h-[100vh] bsorder-4 border-black transition ease-in-out duration-500 delay-100">
        <div className="">
          <NavigationBar />
        </div>
        <div className="nxl:sborder-4 border-black border-double px-2 h-[100vh]">
          <img className="w-full h-full" src={introImg} alt="background-img" />
        </div>
      </div>
    </>
  );
};

export default Landing;
