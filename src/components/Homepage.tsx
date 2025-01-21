import React from "react";
import "../App.css";
import Landing from "./Landing";
import Discover from "./Discover";
import Explore from "./Explore";

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
    </>
  );
};

export default Homepage;
