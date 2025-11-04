import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BookOpen, Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLoguot = () => {
    localStorage.removeItem("token");
    navigate("/", { replace: true });
    window.history.pushState(null, "", window.location.href);
  };

  return (
    <nav className="w-full bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo + App Name */}
        <Link to="/home" className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-900 rounded-lg w-10 h-10">
            <BookOpen className="text-white w-6 h-6" />
          </div>
          <span className="font-bold text-2xl tracking-wide text-gray-900">
            E-Notes
          </span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Nav Items */}
        <div
          className={`${
            open ? "block" : "hidden"
          } lg:flex items-center gap-6 lg:static absolute top-16 left-0 w-full bg-white lg:w-auto p-4 lg:p-0 border-b lg:border-none`}
        >
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-6">
            {/* Hidden links (as per your original code) */}
            <li className="hidden">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-600 hover:text-black ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="hidden">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-gray-600 hover:text-black ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li className="hidden">
              <NavLink
                to="/error"
                className={({ isActive }) =>
                  `text-gray-600 hover:text-black ${
                    isActive ? "font-semibold underline" : ""
                  }`
                }
              >
                Error
              </NavLink>
            </li>
          </ul>

          {/* Login / Logout Buttons */}
          {localStorage.getItem("token") ? (
            <NavLink
              to="/"
              onClick={handleLoguot}
              className="bg-gray-900 w-full lg:w-fit text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Logout
            </NavLink>
          ) : (
            <div className="flex flex-col lg:flex-row gap-3 w-full lg:w-auto">
              <NavLink
                to="/login"
                className="bg-gray-900 w-full lg:w-fit text-white px-4 py-2 rounded-lg text-center hover:bg-gray-800 transition"
              >
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="bg-gray-900 w-full lg:w-fit text-white px-4 py-2 rounded-lg text-center hover:bg-gray-800 transition"
              >
                Signup
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
