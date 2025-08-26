

const ContactBanner = () => {
  return (
     <div
      className="relative bg-cover bg-center text-white py-32 px-6 text-center bg-[url('https://i.pinimg.com/736x/ed/53/12/ed53121b074b8437e4bd349e1fb58359.jpg')] "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1  className="text-4xl md:text-5xl font-bold mb-4 animate__animated animate__fadeInDown">
          We’re Here to Listen and Help
        </h1>
        <p className="text-lg md:text-xl animate__animated animate__flipInX">
        Whether you have questions, suggestions, or just want to connect, our team is here to listen and help create a lasting impact together.
        </p>
      </div>
    </div>
  );
};

export default ContactBanner;
