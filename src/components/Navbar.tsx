import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Downloads</a>
              </li>
              <li>
                <a>Plans & Pricing</a>
              </li>
            </ul>
          </div>
          <a href="/" className="text-xl hover:underline text-blue-500 font-bold">
            Roomly.
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <a>Home</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li>
                <a>Downloads</a>
              </li>
              <li>
                <a>Plans & Pricing</a>
              </li>
          </ul>
        </div>
        <div className="navbar-end space-x-4">
          <a className="btn  btn-outline btn-primary rounded-full px-8 py-2 hidden sm:flex">Login</a>
          <a className="btn btn-primary rounded-full px-8 py-2">Login</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
