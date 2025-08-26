import { useEffect, useState } from "react";
import TeamCard from "./TeamCard";
import Marquee from "react-fast-marquee";

const TeamSection1 = () => {
  const [members, setMembers] = useState([]);

  // fetch data from TeamSection1 json
  useEffect(() => {
    fetch("/TeamMembers1.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  }, []);
  return (<div className=" ">
        <Marquee speed={40} pauseOnHover className="p-5">
            {
            members.map((member, index)=> <TeamCard member={member} index={index}></TeamCard>)
        }
        </Marquee>

  </div>);
};

export default TeamSection1;
