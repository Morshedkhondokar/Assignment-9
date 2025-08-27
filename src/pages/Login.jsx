import { Link, useLocation, useNavigate } from "react-router";
import GoogleLoginBtn from "../components/GoogleLoginBtn";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";

const Login = () => {
  const { setUser, userLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    const redirectPath = location.state?.from?.pathname || "/";
    // log in user 
    userLogin(email,password)
     .then(result => {
      const user = result.user;
      setUser(user)
       navigate(redirectPath, { replace: true });

    })
    .catch(error =>{
      console.log(error)
    })
  };
  return (
    <section className="flex flex-col pt-10 items-center justify-center min-h-screen bg-blue-50 px-6">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-blue-600">
          Login your account
        </h2>
        {/* <p className="text-gray-600 text-center mt-2">
          Please login to your account
        </p> */}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
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
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
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

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" name="remember" className="w-4 h-4" />{" "}
              Remember Me
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-gray-600 text-center mt-6">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Create account
          </Link>
        </p>
      </div>
      {/* login with googl */}
      <GoogleLoginBtn />
    </section>
  );
};

export default Login;
