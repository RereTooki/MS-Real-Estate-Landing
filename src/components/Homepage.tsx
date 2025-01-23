import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import Landing from "./Landing";
import Discover from "./Discover";
import Explore from "./Explore";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Register from "./Register";
import Footer from "./Footer";
import logo from "../assets/icons/MSDark.svg";
import image1 from "../assets/images/pent.png";
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
  // Create refs for each section
  const introRef = useRef<HTMLDivElement>(null);
  const productRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  // // Track loaded images
  // useEffect(() => {
  //   if (imagesLoaded === 41) {
  //     // All images are loaded
  //     setIsLoading(false);
  //   }
  // }, [imagesLoaded]);

  // const handleImageLoad = () => {
  //   setImagesLoaded((prev) => prev + 1);
  // };

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
    console.log(setIsLoading);
  }, []);
  return (
    <>
      {" "}
      {isLoading ? (
        // Loading animation
        <Loading />
      ) : (
        // Main content
        <div className="shover:scale-[1.04] transition ease-in-out duration-500 delay-10">
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
