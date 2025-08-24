import { FcDonate } from "react-icons/fc";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a
          href="#"
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          Donate
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          Blog
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="font-semibold md:text-xl hover:text-blue-400 transition-colors"
        >
          Contact
        </a>
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
            <a
              href="#"
              className="btn btn-sm bg-white text-blue-600 border-none hover:bg-gray-200"
            >
              Login
            </a>
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
