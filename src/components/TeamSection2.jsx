import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import Marquee from "react-fast-marquee";

const TeamSection2 = () => {
  const [members, setMembers] = useState([]);

  // fetch data from TeamSection2 json
  useEffect(() => {
    fetch("/TeamMembers2.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (
    <div  className=" ">
      <Marquee direction="right" speed={40} pauseOnHover className="p-5">
        {members.map((member, index) => (
          <TeamCard member={member} index={index}></TeamCard>
        ))}
      </Marquee>
    </div>
  );
};

export default TeamSection2;
