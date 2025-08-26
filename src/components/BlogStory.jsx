import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogStory = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="py-12 ">
        <div className="max-w-6xl mx-auto px-6">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="w-[330px] md:w-[390px] mx-auto mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center  pb-2 text-gray-900 border-b-4 rounded-2xl border-blue-600">
              How Your Support Makes a Difference
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStory;
