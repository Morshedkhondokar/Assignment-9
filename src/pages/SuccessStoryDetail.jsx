import {  useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";

const SuccessStoryDetail = () => {
  const { id } = useParams(); 
  const [story, setStory] = useState(null);
 const navigate = useNavigate();
  useEffect(() => {
    fetch("/successStories.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setStory(found);
      });
  }, [id]);

  if (!story) return <p className="text-center py-20">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100  rounded-xl">
      <h2 className="text-3xl font-bold mb-4">{story.title}</h2>
      <img
        src={story.image}
        alt={story.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 mb-4">{story.fullArticle}</p>
      <p className="text-gray-500">{story.date}</p>

       {/* Back Button */}
      <button
        onClick={() => navigate(-1)} // পেছনের page এ নেবে
        className="btn my-4  px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 rounded-xl "
      >
        ← Back
      </button>
    </div>
  );
};

export default SuccessStoryDetail;
