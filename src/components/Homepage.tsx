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
    "../src/assets/images/Intro.png",
    "../src/assets/images/aboutUs.png",
    "../src/assets/images/customer1.png",
    "../src/assets/images/customer2.png",
    "../src/assets/images/discover1.png",
    "../src/assets/images/discover2.png",
    "../src/assets/images/discover3.png",
    "../src/assets/images/explore.png",
    "../src/assets/images/explore1.png",
    "../src/assets/images/explore2.png",
    "../src/assets/images/pent.png",
    "../src/assets/images/reService.png",
    "../src/assets/images/reServiceMini.png",
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
        <div className="w-screen h-screen flex items-center justify-center bg-gray-100  transition ease-in-out duration-500 delay-10  select-none">
          <div className="flex flex-col items-center">
            <div className=" sborder-4 transition ease-in-out duration-500 delay-10  hover:scale-[1.08] w-[30vw] h-[30vw]m animate-pulse">
              <img
                className="w-full h-full drop-shadow-[3px_6px_5px_rgba(0,0,0,0.25)]"
                src={logo}
                alt="background-img"
              />
            </div>
            <div
              className="sborder-4 msax-w-[80%]"
              data-aos="zoom-in"
              data-aos-duration="1700"
            >
              <h1 className="loraFont font-medium text-[3.5vw] text-center text-black/50 leasding-[102px] hover:scale-[1.04] transition ease-in-out duration-500 delay-10 ">
                Where <span className="font-normal italic">Luxury</span> Meets
                Affordability
              </h1>
            </div>
            {/* <div className="loader animate-spin rounded-full border-t-4 border-blue-500 border-4 h-12 w-12"></div>
            <p className="mt-4 text-gray-600">Loading...</p> */}
          </div>
        </div>
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
