const DonateBanner = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center text-white py-32 px-6 text-center 
        bg-[url('https://i.pinimg.com/736x/d0/e8/0c/d0e80c4aeb15c8d3669739677a073606.jpg')]"
       
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
        <h1  className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
          Make a Difference Today
        </h1>
        <p className="text-lg md:text-xl animate__animated animate__flipInX">
          Your contribution brings warmth and hope to families in need.
        </p>
      </div>
      </section>
    </div>
  );
};

export default DonateBanner;
