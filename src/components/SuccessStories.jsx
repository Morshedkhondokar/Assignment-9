import { useEffect, useState } from "react";
import SuccessStoryCard from "../components/SuccessStoryCard";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("/successStories.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <section className="py-12 bg-gray-50 my-7">
      <div className="max-w-6xl mx-auto px-6">
        <div
        data-aos="fade-left"
        data-aos-duration="2000"
        className="w-[290px] md:w-[360px] mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center  pb-2 text-gray-900 border-b-4 rounded-2xl border-blue-600">
        Our Success Stories
        </h2>
      </div>

        <div className="grid col-span-1 gap-6">
          {stories.map((story) => (
            <SuccessStoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
