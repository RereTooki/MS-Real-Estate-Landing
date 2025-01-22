import React from "react";
import "../App.css";
import Landing from "./Landing";
import Discover from "./Discover";
import Explore from "./Explore";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Register from "./Register";
import Footer from "./Footer";

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
      <div className="">
        <Footer />
      </div>
      <div className="">
        <Register />
      </div>
    </>
  );
};

export default Homepage;
