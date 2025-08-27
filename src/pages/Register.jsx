// src/pages/Register.jsx
import React, { useContext } from "react";
import GoogleLoginBtn from "../components/GoogleLoginBtn";
import AuthContext from "../context/AuthContext";

const Register = () => {
  const {setUser,createNewUser} = useContext(AuthContext);
   const handleSubmit = (e)=> {
        e.preventDefault()
        const fullname = e.target.fullname.value;
        const photoURl = e.target.photoURL.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(fullname,photoURl,email,password)
        createNewUser(email,password)
        .then(result => {
          const user = result.user;
          setUser(user)
          console.log(user)
        })
        .catch(error => {
          console.log(error);
        })
    }
  return (
    <section className="min-h-screen pt-10 flex  flex-col items-center justify-center bg-blue-50">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Create Account
        </h2>
        {/* <p className="text-gray-600 text-center mt-2">
          Join us today and be a part of the change.
        </p> */}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
            <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700 mb-1">
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

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

         

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
              I agree to the <span className="text-blue-600">Terms & Conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
      {/* register with google */}
      <GoogleLoginBtn/>
    </section>
  );
};

export default Register;
