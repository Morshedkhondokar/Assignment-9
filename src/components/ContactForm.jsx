const ContactForm = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="2000"
      className="py-16 bg-gray-50"
    >
      <div className="max-w-3xl mx-auto px-6 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Get in Touch
        </h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
            >
              Your Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              className="block text-gray-700 font-medium mb-1"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label
             
              className="block text-gray-700 font-medium mb-1"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              placeholder="Enter the subject"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              
              className="block text-gray-700 font-medium mb-1"
            >
              Your Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
