

const TestimonialsCard = ({ text, name, role, image }) => {
  return (
    <div>
      <div data-aos="fade-down"
     data-aos-duration="1000" className="bg-white w-[330px] p-6 rounded-2xl shadow hover:shadow-lg transition text-center mr-6">
        <img
          src={image}   
          alt={name}
          className="w-16 h-16 rounded-full mx-auto mb-4"
        />
          <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
        <p className="text-gray-700 mb-4 italic">"{text}"</p>
      </div>
    </div>
  );
};

export default TestimonialsCard;
