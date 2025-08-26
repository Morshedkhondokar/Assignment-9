import { Outlet } from "react-router";
import AboutBanner from "../components/AboutBanner";
import WhoWeAre from "../components/WhoWeAre";
import Team from "../components/Team";


const About = () => {
    return (
        <div>
            <AboutBanner/>
            <WhoWeAre/>
            <Team/>
        </div>
    );
};

export default About;