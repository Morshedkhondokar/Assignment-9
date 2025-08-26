const BlogBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center text-white py-32 px-6 text-center bg-[url('https://i.pinimg.com/736x/95/e3/fd/95e3fd0c539f5ddfe698b1554c6644bb.jpg')]"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1  className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
          Our Stories of Hope
        </h1>
        <p className="text-lg md:text-xl animate__animated animate__flipInX">
          Read how your support changes lives every day.
        </p>
      </div>
    </div>
  );
};

export default BlogBanner;
