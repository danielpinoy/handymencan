import React from "react";
import handymen from "../images/handy-men-with-new-building-png--new (1).png";
import backgroundHero from "../images/Home-page-cover-image.jpg";
const Hero = () => {
  return (
    <div className="relative bg-gray-50 min-h-screen">
      {/* Background Image */}
      <img
        src={backgroundHero}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay*/}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="">
                <img src={handymen} alt="" className="w-25 h-25" />
              </div>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                WELCOME TO
              </h1>
              <br />
              <span className="text-4xl lg:text-5xl xl:text-6xl font-bold bg-yellow-400 px-2 py-1 rounded">
                HANDYMEN CAN
              </span>
              <p className="text-lg lg:text-xl leading-relaxed max-w-xl text-neutral-800">
                Reliable, Trusted, and Professional Handyman Services
              </p>
              {/*    Products Button   */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2">
                  View all Services
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
