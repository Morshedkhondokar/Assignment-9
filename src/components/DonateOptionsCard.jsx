const DonateOptionsCard = ({ opt, index }) => {
  const { title, desc, icon, animation } = opt;

  return (
    <div
      key={index}
      data-aos={animation}
      data-aos-duration="1500"
      className="bg-white px-6 py-8 rounded-2xl shadow-md  hover:shadow-xl cursor-pointer"
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
};

export default DonateOptionsCard;
