import DonateBanner from "../components/DonateBanner";
import DonateForm from "../components/DonateForm";
import DonateIntro from "../components/DonateIntro";
import DonationOptions from "../components/DonationOptions";


const Donate = () => {
    return (
        <div>
            <DonateBanner></DonateBanner>
            <DonationOptions></DonationOptions>
            <DonateIntro/>
            <DonateForm></DonateForm>
        </div>
    );
};

export default Donate;