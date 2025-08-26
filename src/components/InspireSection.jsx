import { Link } from "react-router";

const InspireSection = () => {
  return (
    <div className="py-16 bg-blue-600 text-white text-center px-6">
      <div className="max-w-3xl mx-auto">
        <h2
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Together We Can Make a Difference
        </h2>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="mb-6 text-lg md:text-xl"
        >
          Join our mission to bring hope and support to families in need. Every
          contribution counts and creates a lasting impact.
        </p>
        <Link to="/donate">
          <button
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InspireSection;
