import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="w-full mb-5 min-h-screen  bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.5)),url('https://i.pinimg.com/736x/07/ad/38/07ad386ab0e2bbc1dea1bf07ac07b132.jpg')] bg-cover  bg-center  
    flex justify-center items-center p-5 "
    >
      <div className="flex flex-col items-center justify-center h-full text-center -mt-10">
        <h1 className="animate__animated animate__fadeInDown text-5xl font-bold text-white drop-shadow-lg">
          Give Clothes, Spread Love
        </h1>
        <p className="text-white mt-4 max-w-lg mx-5 animate__animated animate__fadeInDown">
          Your small donation can bring warmth and dignity to someone in need.
        </p>
        <Link to={'/donate'}>
          <button className="animate__animated animate__fadeInUp btn bg-blue-600 hover:bg-blue-700 border-none text-white mt-8">
            Donate Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
