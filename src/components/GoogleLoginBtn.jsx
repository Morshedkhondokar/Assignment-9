// src/components/GoogleLoginButton.jsx
import { FcGoogle } from "react-icons/fc";

const GoogleLoginBtn = () => {
  return (
    <button
      type="button"
      className="w-[300px] cursor-pointer my-14 flex items-center justify-center gap-2 border
       border-gray-300 rounded-lg py-3
       shadow-md bg-white hover:scale-110 ease-in
       text-gray-700 font-medium hover:bg-gray-100 transition"
      onClick={() => alert("Log in with google")}
    >
      <FcGoogle className="text-2xl" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginBtn;
