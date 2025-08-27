import { useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";

const Profile = () => {
  const logoutModalRef = useRef(null);
  const updatModalRef = useRef(null);
  const { user, setUser, logOut, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  const ShowLogoutModal = () => {
    logoutModalRef.current.click();
  };
  const updateProfile = () => {
    updatModalRef.current.click();
  };

// UPDATE profile
  const handleUpdat = (e) => {
    e.preventDefault();
    const fullname = e.target.fullname.value;
    const photoURL = e.target.photoURL.value;

    updateUserProfile({ displayName: fullname, photoURL })
      .then(() => {
        //  state update 
        setUser({
          ...user,
          displayName: fullname,
          photoURL,
        });

        // Modal off
        document.getElementById("update_modal").checked = false;
        // input emty
        e.target.reset();
      })
      .catch((err) => console.log("Profile update error:", err));
  };

  //  log out 
  const handlaLogout = () => {
    logOut();
    navigate("/");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      {/* Profile Card */}
      <div
        className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 relative overflow-hidden"
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <div className="relative flex flex-col items-center">
          <img
            src={
              user?.photoURL ||
              "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
            }
            alt={user?.displayName}
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {user?.displayName}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={updateProfile}
            className="btn btn-primary px-8"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Update Profile
          </button>

          <button
            onClick={ShowLogoutModal}
            className="btn btn-error px-8"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* ******************** log out modal  *************************/}
      <div>
        {/* The button to open log out modal */}
        <label
          ref={logoutModalRef}
          htmlFor="logout_modal"
          className="btn hidden"
        >
          log out
        </label>

        {/* log out modal section*/}
        <input type="checkbox" id="logout_modal" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3
              className="text-3xl text-center font-bold text-gray-800 
          "
            >
              Are you sure
            </h3>
            <p className="py-4 text-center">
              {" "}
              You want to log out of your account?
            </p>
            <div className="modal-action justify-center gap-3">
              <label
                htmlFor="logout_modal"
                className="btn w-[130px] text-white  bg-blue-400"
              >
                Close!
              </label>
              <label
                onClick={handlaLogout}
                htmlFor="my_modal_6"
                className="btn bg-red-500 text-white w-[130px] "
              >
                Yes' Log Out
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* ********************** update profile *******************/}
      <div>
        {/* The button to open update Profile modal modal */}
        <label
          ref={updatModalRef}
          htmlFor="update_modal"
          className="btn hidden"
        >
          update
        </label>

        {/* update profile modal section */}
        <input type="checkbox" id="update_modal" className="modal-toggle" />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-3xl text-center font-bold text-gray-800 mb-4">
              Update your profile
            </h3>
            <form onSubmit={handleUpdat}>
              {/* Name */}
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="fullname"
                  placeholder="Enter your full name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* pgoto url */}
              <div>
                <label
                  htmlFor="photoURL"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Photo URL
                </label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  placeholder="Enter your photo URL"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="modal-action justify-center gap-3">
                <label
                  htmlFor="update_modal"
                  className="btn w-[130px] text-white  bg-blue-400"
                >
                  Close!
                </label>
                <button
                  type="submit"
                  id="update_modal_close"
                  className="btn bg-red-500 text-white w-[130px] "
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
