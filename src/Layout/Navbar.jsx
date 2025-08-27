
import { useContext } from "react";
import { FcDonate } from "react-icons/fc";
import { Link, NavLink } from "react-router";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const {user} = useContext(AuthContext)
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          Home
        </NavLink>
      </li>

      {
        user && <li>
        <NavLink
          to={"/donate"}
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          Donate
        </NavLink>
      </li>
      }
      <li>
        <NavLink
          to={"/blog"}
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <>
      {/* Top Navbar */}
      <nav className="bg-blue-600 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-1">
            <FcDonate className="text-4xl" />
            <span className="text-2xl font-bold text-white">DonateWear</span>
          </div>

          {/* Login */}
          <div>
            {user ? (
              <>
              <Link to={'/profile'}>
               <div className="w-[90px] flex  items-center gap-2 bg-white rounded-l-3xl">
                <div className="size-7 bg-white rounded-full overflow-hidden ">
                  <img src={user.photoURL || "https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"} className="w-7 h-7 object-cover " alt="" />
                </div>
                <h2 className="text-blue-600"> Profile</h2>
               </div>
              </Link>
              </>
            ) : (
              <Link
                to={"/login"}
                className="btn btn-sm bg-white text-blue-600 border-none hover:bg-gray-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="bg-white text-gray-700  ">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <ul className="flex justify-center flex-row font-medium space-x-8 text-sm">
            {links}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
