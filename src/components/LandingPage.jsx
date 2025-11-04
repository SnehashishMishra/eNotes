import React, { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { Notebook, LogIn, UserPlus } from "lucide-react";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home", { replace: true });
      window.history.pushState(null, "", window.location.href);
    }
  }, []);

  return (
    <div
      className="flex flex-col justify-center items-center text-center px-4 py-4"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #fafafa, #f1f1f1)",
      }}
    >
      {/* Logo + Title */}
      <div className="mb-10">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Notebook className="w-10 h-10 text-gray-900" />
          <h1 className="font-bold text-4xl tracking-wide text-gray-900">
            E-Notes
          </h1>
        </div>
        <p className="text-gray-600 text-sm">
          Your notes. Organized. Minimal. Accessible anywhere.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white border rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Welcome to E-Notes
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          Store your ideas, thoughts, and inspiration all in one clean space.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {/* Login */}
          <NavLink
            to="/login"
            className="w-full sm:w-fit bg-gray-900 text-white rounded-lg px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-800 transition"
          >
            <LogIn size={18} />
            Login
          </NavLink>

          {/* Signup */}
          <NavLink
            to="/signup"
            className="w-full sm:w-fit border border-gray-800 rounded-lg px-5 py-2 flex justify-center items-center gap-2 hover:bg-gray-800 hover:text-white transition"
          >
            <UserPlus size={18} />
            Sign Up
          </NavLink>
        </div>
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} E-Notes. All rights reserved.
      </p>
    </div>
  );
};

export default LandingPage;
