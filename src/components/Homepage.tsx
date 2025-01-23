import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Landing from "./Landing";
import Discover from "./Discover";
import Explore from "./Explore";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Register from "./Register";
import Footer from "./Footer";
import Loading from "./Loading";

import introImg from "../assets/images/Intro.png";
import aboutUsImg from "../assets/images/aboutUs.png";
import customer1Img from "../assets/images/customer1.png";
import customer2Img from "../assets/images/customer2.png";
import discover1Img from "../assets/images/discover1.png";
import discover2Img from "../assets/images/discover2.png";
import discover3Img from "../assets/images/discover3.png";
import exploreImg from "../assets/images/explore.png";
import explore1Img from "../assets/images/explore1.png";
import explore2Img from "../assets/images/explore2.png";
import pentImg from "../assets/images/pent.png";
import reServiceImg from "../assets/images/reService.png";
import reServiceMiniImg from "../assets/images/reServiceMini.png";

const Homepage = () => {
  // Refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);

  const preloadImages = [
    introImg,
    aboutUsImg,
    customer1Img,
    customer2Img,
    discover1Img,
    discover2Img,
    discover3Img,
    exploreImg,
    explore1Img,
    explore2Img,
    pentImg,
    reServiceImg,
    reServiceMiniImg,
  ];

  const cacheImages = async (srcArray: string[]): Promise<void> => {
    const promises = srcArray.map((src) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    cacheImages(preloadImages);

    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isLargeScreen) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
        <p className="text-red-500 text-lg">
          Please use a larger screen to view this site.
        </p>
      </div>
    );
  }

  return (
    <>
      {isLoading ? (
        // Loading animation
        <Loading />
      ) : (
        // Main content
        <div className=" transition ease-in-out duration-500 delay-10">
          <div ref={introRef} className="">
            <Landing />
          </div>
          <div ref={productRef} className="">
            <Discover />
          </div>
          <div className="">
            <Explore />
          </div>
          <div ref={servicesRef} className="">
            <Services />
          </div>
          <div ref={aboutRef} className="">
            <AboutUs />
          </div>
          <div ref={reviewRef} className="">
            <Register />
          </div>
          <div className="">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default Homepage;
