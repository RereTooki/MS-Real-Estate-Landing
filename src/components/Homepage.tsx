import React from "react";
import "../App.css";
import Landing from "./Landing";
import Discover from "./Discover";

const Homepage = () => {
  return (
    <>
      <div className="">
        <Landing />
      </div>
      <div className="">
        <Discover />
      </div>
    </>
  );
};

export default Homepage;
