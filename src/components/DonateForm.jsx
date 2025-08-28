import { useContext } from "react";
import { IoMdHeart } from "react-icons/io";
import AuthContext from "../context/AuthContext";
const DonateForm = () => {
  const { user } = useContext(AuthContext);

  const handleDonate = (e) => {
    e.preventDefault();
    document.getElementById("my_modal_1").showModal();

    e.target.reset()
  };

  return (
    <section
      data-aos="fade-right"
      data-aos-duration="2000"
      className="py-20 bg-gray-50"
    >
      <div className="max-w-2xl mx-auto px-6 bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Make a Donation
        </h2>
        <form onSubmit={handleDonate} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Donation Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Donation Type
            </label>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Donate Clothes</option>
              <option>Donate Money</option>
              <option>Volunteer</option>
              <option>Other</option>
            </select>
          </div>

          {/* Donation Details */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Donation Details
            </label>
            <input
              type="text"
              required
              placeholder="Enter donation details"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Message
            </label>
            <textarea
              placeholder="Write a message"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex justify-center items-center gap-3 w-full cursor-pointer bg-blue-600 text-white font-semibold p-3 rounded-lg hover:bg-blue-700 transition"
          >
            <IoMdHeart className="text-xl animate__animated animate__rubberBand animate__infinite" />{" "}
            Donate
          </button>
        </form>
      </div>
      {/* modal  */}
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn hidden" id="modal_Show">
        open modal
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-2xl text-center">
            🎉 Thank You {user?.displayName}!
          </h3>
          <p className="py-4 text-center text-lg">
            {" "}
            Your donation has been received successfully.
          </p>
          <div className="modal-action justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn w-[250px]">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default DonateForm;
