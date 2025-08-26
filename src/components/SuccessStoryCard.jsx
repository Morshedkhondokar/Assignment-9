import { Link } from "react-router";

const SuccessStoryCard = ({ story }) => {
  const { image, title, desc,animation } = story;
  return (
    <div data-aos={animation}
          data-aos-duration="2000" className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col md:flex-row w-full h-auto md:h-[200px]">
      {/* Image Section */}
      <div className="md:w-1/3 h-64 md:h-auto flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-2 line-clamp-4 ">{desc}</p>
        </div>
        {/* btn */}
        <div>
          <Link to={`/blog/success-story/${story.id}`}>
            <button className="text-blue-600  font-medium hover:underline cursor-pointer">
              Read More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
