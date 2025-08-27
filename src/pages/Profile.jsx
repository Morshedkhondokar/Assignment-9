import {  useRef, useState } from "react";

const Profile = () => {
const logoutModalRef = useRef(null);




  const setShowLogoutModal = ()=>{
     logoutModalRef.current.click();
  }


  const [user] = useState({
    name: "Morshed",
    email: "morshed@example.com",
    photo: "https://i.pravatar.cc/150?img=12",
  });

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
            src={user.photo}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-blue-500 object-cover shadow-md"
          />
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => alert("Update Profile logic connect korte hobe!")}
            className="btn btn-primary px-8"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Update Profile
          </button>

          <button
            onClick={setShowLogoutModal}
            className="btn btn-error px-8"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Log Out
          </button>
        </div>
      </div>

      {/* The button to open modal */}
      <label  ref={logoutModalRef} htmlFor="my_modal_6" className="btn hidden">
        open modal
      </label>

      {/* Put this part before </body> tag */}
      <input   type="checkbox" id="my_modal_6" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-3xl text-center font-bold text-gray-800 
          ">Are you sure</h3>
          <p className="py-4 text-center"> You want to log out of your account?</p>
          <div className="modal-action justify-center gap-3">
            <label htmlFor="my_modal_6" className="btn w-[130px] text-white  bg-blue-400">
              Close!
            </label>
            <label onClick={()=> alert('log out your account')} htmlFor="my_modal_6" 
            className="btn bg-red-500 text-white w-[130px] ">
              Yes' Log Out
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
