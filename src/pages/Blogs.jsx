

import BlogBanner from "../components/BlogBanner";
import BlogStory from "../components/BlogStory";
import InspireSection from "../components/InspireSection";
import SuccessStories from "../components/SuccessStories";

const Blogs = () => {


  return (
    <div >
      <BlogBanner/>
      {/* blogs story */}
      <BlogStory></BlogStory>
      {/* InspireSection */}
      <InspireSection></InspireSection>
      {/* success story */}
      <SuccessStories></SuccessStories>
    </div>
  );
};

export default Blogs;
