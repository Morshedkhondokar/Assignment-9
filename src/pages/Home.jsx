import Banner from "../components/banner";
import CTA from "../components/CTA";
import HowWeWork from "../components/HowWeWork";
import Testimonials from "../components/Testimonials";
import WhyDonate from "../components/WhyDonate";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowWeWork></HowWeWork>
      <WhyDonate></WhyDonate>
      <CTA></CTA>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
