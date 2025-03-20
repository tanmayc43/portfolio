import React from "react";
import { LineShadowText } from "./magicui/line-shadow-text";
import profilePic from "../assets/profile-pic.png";

export default function Hero() {
  const currentText = "Hello, I'm Tanmay";
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-black dark:text-black px-4 md:px-0">
        <div className="flex flex-col items-center md:items-start justify-center w-full h-full px-4 md:px-20 text-center md:text-left -translate-y-20 md:-translate-y-24">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold flex items-center gap-2 whitespace-nowrap">
            <LineShadowText className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl">
              {currentText}
            </LineShadowText>
          </div>
          <h2 className="mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl font-bold italic">
            Web Developer, CS Sophomore and an AI/ML Enthusiast
          </h2>
        </div>

        <div className="flex items-center justify-center w-full md:w-2/3 h-auto md:h-full px-4 md:px-15 mt-8 md:mt-0 -translate-y-20 md:-translate-y-24">
          <img
            src={profilePic}
            alt="Profile"
            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-3/4 h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
