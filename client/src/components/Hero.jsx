import React from "react";
import Picc from "../assets/Picc.jpg";
const Hero = () => {
  return (
    <>
      <div className="mt-[-10%] relative h-200 flex justify-center items-center">
        <img src={Picc} alt="" className="absolute -z-1 opacity-90 h-200 w-800 " />

        <div className="grid gap-20 justify-items-center bg-gradient-to-r rounded-xl p-10 w-3/4">
          <h1 className="text-9xl font-black font-[family-name:var(--customFont)]  text-center  bg-center bg-contain bg-clip-text text-transparent  p-3">
            Turn Your Dream Into Reality
          </h1>
          <div className="flex gap-10 ">
            <button className="rounded px-5 py-3 text-white  bg-yellow-500 hover:bg-yellow-600">Book Now</button>
          <button className="rounded px-5 py-3 text-yellow-500 border-3 border-yellow-500 hover:bg-yellow-600 hover:text-white">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;