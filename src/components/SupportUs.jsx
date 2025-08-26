import { Link } from "react-router";
import SupportCards from "./SupportCards";

const SupportUs = () => {
  return (
    <div className="bg-white py-16  text-center">
      {/* SupportCards*/}
      <SupportCards />

      {/* Goals */}
      <div className="bg-blue-600 text-white py-12">
        <h3
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="text-2xl font-semibold mb-4"
        >
          Our Goals for 2025
        </h3>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="3000"
          className="  max-w-xl mx-auto mb-8"
        >
          This year, we aim to provide food and shelter to over 500 families,
          ensure that more than 200 children can continue their education, and
          engage at least 100 volunteers to take part in meaningful community
          projects.
        </p>

        {/* CTA */}
        <Link to={'/donate'}>
          <button
            data-aos="zoom-in-up"
            data-aos-duration="3000"
            className="btn bg-white hover:bg-gray-100 text-blue-600 px-6 rounded-xl font-medium shadow-md transition"
          >
            Donate now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SupportUs;
