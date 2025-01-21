import React from "react";
import "../App.css";
import Landing from "./Landing";
import Discover from "./Discover";
import Explore from "./Explore";
import Services from "./Services";
import AboutUs from "./AboutUs";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Landing />
      </div>
      <div className="">
        <Discover />
      </div>
      <div className="">
        <Explore />
      </div>
      <div className="">
        <Services />
      </div>
      <div className="">
        <AboutUs />
      </div>
    </>
  );
};

export default Homepage;
