"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = (
    <>
      <li
        className={`text-lg font-medium transition duration-300 ${
          pathname === "/" ? "text-red-600" : "hover:text-red-600"
        }`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={`text-lg font-medium transition duration-300 ${
          pathname === "/alltour" ? "text-red-600" : "hover:text-red-600"
        }`}
      >
        <Link href="/alltour">All Tourists Spot</Link>
      </li>
      <li
        className={`text-lg font-medium transition duration-300 ${
          pathname === "/addtourspot" ? "text-red-600" : "hover:text-red-600"
        }`}
      >
        <Link href="/addtourspot">Aad Tour Spot</Link>
      </li>
      <li
        className={`text-lg font-medium transition duration-300 ${
          pathname === "/mylist" ? "text-red-600" : "hover:text-red-600"
        }`}
      >
        <Link href="/mylist">My List</Link>
      </li>
      <li
        className={`text-lg font-medium transition duration-300 ${
          pathname === "/profile" ? "text-red-600" : "hover:text-red-600"
        }`}
      >
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );

  return (
    <div className="relative z-20">
      <div className="navbar fixed top-0 left-0 right-0 z-10 max-w-screen-xl mx-auto bg-gradient-to-r from-gray-50 to-gray-200 shadow-md px-4 lg:px-8 py-2">
        <div className="navbar-start flex items-center space-x-4">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost p-1"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg z-[1] mt-3 w-48 p-3"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            href="/"
            className="text-2xl font-bold text-gray-700 flex items-center"
          >
            <span className="text-red-600 text-3xl mr-2">🌍</span>
            <span className="tracking-wide">Tourism</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-3 space-x-6">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <button className={`text-lg btn btn-outline border-b-4 font-medium transition duration-300 ${
          pathname === "/signin" ? "text-red-600" : "hover:text-red-600"
        }`}>
            <Link href='/signin'>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
