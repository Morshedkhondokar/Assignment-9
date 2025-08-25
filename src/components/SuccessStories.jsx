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
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Our Success Stories
        </h2>

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
