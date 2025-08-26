import TeamSection1 from "./TeamSection1";
import TeamSection2 from "./TeamSection2";

const Team = () => {
  return (
    <div className="my-16 py-12 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2  data-aos="fade-right"
            data-aos-duration="2000"
     className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Our Team Members
        </h2>
        <p  data-aos="fade-left "
            data-aos-duration="2000"
     data-aos-easing="ease-in-sine" className="text-gray-600 max-w-2xl px-2 mx-auto text-sm">
          Meet the passionate individuals who are working tirelessly to make a
          positive impact in our community. Each member brings unique skills,
          dedication, and vision to our mission.
        </p>
      </div>

      {/* Team Section 1 */}
      <TeamSection1 />

      {/* Team Section 2 */}
      <TeamSection2 />
    </div>
  );
};

export default Team;
