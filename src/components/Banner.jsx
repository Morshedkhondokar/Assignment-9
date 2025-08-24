const Banner = () => {
  return (
    <div className="w-full mb-5 min-h-screen bg-[url('https://i.pinimg.com/736x/07/ad/38/07ad386ab0e2bbc1dea1bf07ac07b132.jpg')] bg-cover  bg-center  flex justify-center items-center p-5">
      <div className="flex flex-col items-center justify-center h-full text-center bg-white/30 py-3  md:p-5 max-w-[650px] mx-auto -mt-10 rounded-2xl "> 
        <h1 className="text-5xl font-bold text-white drop-shadow-lg">
          Give Clothes, Spread Love
        </h1>
        <p className="text-white mt-4 max-w-lg mx-5">
          Your small donation can bring warmth and dignity to someone in need.
        </p>
        <button className="btn bg-blue-600 border-none text-white mt-8">Donate Now</button>
      </div>
    </div>
  );
};

export default Banner;
