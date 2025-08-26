import React from "react";

const supportCards = [
  {
    id: 1,
    title: "Providing Essentials",
    animation: "fade-right",
    content:
      "Every day, countless families struggle to meet their basic needs. With your support, we can bring them food, warmth, and education.",
  },
  {
    id: 2,
    title: "Empowering Education",
    animation: "fade-up",
    content:
      "We aim to provide children from underprivileged families the materials and support they need to continue their education and thrive.",
  },
  {
    id: 3,
    title: "Building Stronger Communities",
    animation: "fade-left",
    content:
      "By engaging volunteers and donors, we create sustainable impact, ensuring that no family is left behind and everyone has a chance to flourish.",
  },
];

const SupportCards = () => {
  return (
    <div className="max-w-6xl mb-24 mx-auto px-6">
      {/* Heading */}
      <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-72 mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 pb-2 text-gray-900 rounded-2xl border-b-2 border-blue-600">
             Why Support Us?
            </h2>
          </div>
      <div className="grid md:grid-cols-3 gap-8">
        {supportCards.map((card) => (
          <div
            key={card.id}
            data-aos={card.animation}
            data-aos-duration="2000"
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg "
          >
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              {card.title}
            </h3>
            <p className="text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportCards;
