import { Link } from "react-router";

const CTA = () => {
  return (
    <div className="mb-18">
      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 data-aos="zoom-in-up"  data-aos-duration="3000"  className="text-3xl md:text-4xl font-bold mb-4">
          Your Small Help Can Make a Big Difference
        </h2>
        <p data-aos="zoom-in-up"  data-aos-duration="3000" className="max-w-2xl mx-auto mb-6 text-lg">
          Every piece of clothing you donate brings warmth and hope to someone
          in need. Join us today in spreading kindness and changing lives.
        </p>
        <Link to={'/donate'}>
        <button
          data-aos="zoom-in-up"  data-aos-duration="3000"
          className="inline-block cursor-pointer bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Donate Now
        </button>
        </Link>
      </section>
    </div>
  );
};

export default CTA;
