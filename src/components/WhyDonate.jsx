import 'animate.css';

const WhyDonate = () => {
  return (
    <section className="bg-gray-50 py-16 my-8 px-4 mb-20">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Title */}
        <div data-aos="fade-up"
     data-aos-duration="1000" className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Why Donate?
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Every piece of clothing you donate can bring comfort and dignity to
            someone in need. Your kindness creates real impact.
          </p>
        </div>

        {/* Success Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">500+</h3>
            <p className="text-gray-700 mt-2">
              Families received clothing support
            </p>
          </div>

          <div
           data-aos="zoom-in"
            data-aos-duration="2000"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">1200+</h3>
            <p className="text-gray-700 mt-2">Clothes donated successfully</p>
          </div>

          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
          >
            <h3 className="text-2xl font-bold text-blue-600">20+</h3>
            <p className="text-gray-700 mt-2">
              Communities impacted nationwide
            </p>
          </div>
        </div>

        {/* Big Success Story replaced with Our Goal */}
        <div
           data-aos="zoom-out-up"
          data-aos-duration="2000"
          className="bg-white max-w-[900px] mx-auto flex flex-col md:flex-row justify-center items-center p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
        >
          {/* image */}
          <div>
            <img
              className="rounded-2xl"
              src="https://i.pinimg.com/736x/00/e2/e3/00e2e3cb3b3362e60fb5bf98e6757d1f.jpg"
              alt=""
            />
          </div>
          {/* our goal */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 mt-3  md:mb-4 md:mt-0">
              Our Goal
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our mission is to make sure that every piece of clothing reaches
              someone who truly needs it. We aim to provide warmth, comfort, and
              dignity to underprivileged families across the country. With your
              help, we can expand our reach and impact more lives every season.
              Every donation counts and brings a smile to someone in need.
            </p>

            {/* Donate Now Button */}
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            >
              Donate Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDonate;
