import { useState } from "react";
import DonateOptionsCard from "./DonateOptionsCard";

const DonationOptions = () => {
  const [option, setOption] = useState([]);

  fetch("/donateOptions.json")
    .then((res) => res.json())
    .then((data) => setOption(data));

  return (
    <div>
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-72 mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 pb-2 text-gray-900 rounded-2xl border-b-2 border-blue-600">
              Choose How You Want to Help
            </h2>
          </div>

          {/* donate option card */}
          <div className="p-6 grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
            {option &&
              option.map((opt, index) => {
                return (
                  <DonateOptionsCard
                    key={index}
                    opt={opt}
                    index={index}
                  ></DonateOptionsCard>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationOptions;
