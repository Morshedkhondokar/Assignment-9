import { useState } from "react";
import TestimonialsCard from "./TestimonialsCard";
import Marquee from "react-fast-marquee";

const Testimonials = () => {
  const [review, setReview] = useState([]);

  fetch("/public/testimonials.json")
    .then((res) => res.json())
    .then((data) => setReview(data));

  return (
    <div className="bg-gray-100 py-5">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="w-[390px] md:w-[540px] mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center  pb-2 text-gray-900 border-b-4 rounded-2xl border-blue-600">
          What People Say About Us
        </h2>
      </div>
      <div className="">
        <Marquee pauseOnHover={true} speed={100}>
          {review.map((item) => (
            <TestimonialsCard key={item.id} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Testimonials;
