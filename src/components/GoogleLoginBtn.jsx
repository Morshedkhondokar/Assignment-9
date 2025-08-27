// src/components/GoogleLoginButton.jsx
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router";
import AuthContext from "../context/AuthContext";

const GoogleLoginBtn = () => {
  const { loginWithGoogle, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
   const redirectPath = location.state?.from?.pathname || "/";
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(redirectPath, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button
      type="button"
      className="w-[300px] cursor-pointer my-14 flex items-center justify-center gap-2 border
       border-gray-300 rounded-lg py-3
       shadow-md bg-white hover:scale-110 ease-in
       text-gray-700 font-medium hover:bg-gray-100 transition"
      onClick={handleLoginWithGoogle}
    >
      <FcGoogle className="text-2xl" />
      Continue with Google
    </button>
  );
};

export default GoogleLoginBtn;
