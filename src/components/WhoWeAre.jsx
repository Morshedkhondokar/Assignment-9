import React from "react";

const WhoWeAre = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/2"
          >
            <img
              src="https://i.pinimg.com/1200x/5a/34/78/5a3478cab62dd74b133ef99f7109ad18.jpg"
              alt="Our Team"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Content */}
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-700 mb-4">
              DonateWear is dedicated to bringing warmth, hope, and support to
              families in need. Our team of volunteers works tirelessly to
              collect and distribute clothing, food, and essential supplies to
              communities across the country. We believe in the power of
              collective action and the impact of every single contribution.
              Each initiative we take is aimed at creating a sustainable,
              positive change for those struggling to meet their basic needs.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Warmth & hope for families</li>
              <li>Volunteers making an impact</li>
              <li>Trust through transparency</li>
            </ul>
            <button className="bg-blue-600 btn text-white px-6  rounded-lg hover:bg-blue-700 transition">
              Join Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;
