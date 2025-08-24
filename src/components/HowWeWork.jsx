import { FiPackage, FiCalendar, FiHeart } from "react-icons/fi";

const HowWeWork = () => {
  return (
    <div>
      <section className="bg-white py-12">
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Section Title */}
          <div data-aos="fade-up"
     data-aos-duration="1000" className="w-72 mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 pb-2 text-gray-900 rounded-2xl border-b-2 border-blue-600">
            How We Work
          </h2>
          </div>
         

          {/* 3 Cards */}
          <div  className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div  data-aos="fade-right" data-aos-duration="2000" className="p-6 rounded-2xl shadow hover:shadow-md transition bg-white border border-gray-100 text-center">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 bg-blue-50 text-blue-600 rounded-xl">
                <FiPackage className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Collect Clothes
              </h3>
              <p className="text-gray-600">
                Gather clean and usable clothes from your home. We accept
                clothing for men, women, and children.
              </p>
            </div>

            {/* Card 2 */}
            <div data-aos="zoom-in" data-aos-duration="2000" className="p-6 rounded-2xl shadow hover:shadow-md transition bg-white border border-gray-100 text-center">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-4 bg-blue-50 text-blue-600 rounded-xl">
                <FiCalendar className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Schedule / Drop-off
              </h3>
              <p className="text-gray-600">
                Schedule a pickup easily from our website or drop off at the
                nearest donation center.
              </p>
            </div>

            {/* Card 3 */}
            <div data-aos="fade-left" data-aos-duration="2000" className="p-6 rounded-2xl shadow hover:shadow-md transition bg-white border border-gray-100 text-center">
              <div  className="w-14 h-14 flex items-center justify-center mx-auto mb-4 bg-blue-50 text-blue-600 rounded-xl">
                <FiHeart className="text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                We Deliver
              </h3>
              <p className="text-gray-600">
                Our team sorts and delivers your donations directly to the
                people who need them the most. Your kindness brings smiles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeWork;
