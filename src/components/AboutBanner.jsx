import React from "react";

const AboutBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-32 px-6 text-center 
      bg-[url('https://i.pinimg.com/1200x/ae/6e/c1/ae6ec1b3b278fd3769882218a11d2455.jpg')]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
          About DonateWear
        </h1>
        <p className="text-lg md:text-xl animate__animated animate__fadeInUp">
          At DonateWear, we believe in empowering communities through kindness and action. 
          Learn about our mission, our journey, and the passionate people working to make 
          a difference every day.
        </p>
      </div>
    </div>
  );
};

export default AboutBanner;
