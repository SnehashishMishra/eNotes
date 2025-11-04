import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Lock, Loader2 } from "lucide-react";

const Signup = ({ showAlert }) => {
  const host = import.meta.env.VITE_HOST;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home", { replace: true });
      window.history.pushState(null, "", window.location.href);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    setIsLoading(false);

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      showAlert("Account Created", "success");
      navigate("/home", { replace: true });
    } else {
      showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh] max-h-[75vh] p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-3xl shadow-lg p-8 pt-6 w-full max-w-sm"
      >
        <h3 className="text-center font-bold text-2xl mb-8">Signup to begin</h3>

        {/* NAME */}
        <div className="relative mb-6">
          <label className="text-gray-700 text-sm font-medium" htmlFor="name">
            Full Name
          </label>

          <User className="absolute left-3 top-10 w-5 h-5 text-gray-400" />

          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            value={credentials.name}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 ps-10 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* EMAIL */}
        <div className="relative mb-6">
          <label className="text-gray-700 text-sm font-medium" htmlFor="email">
            Email Address
          </label>

          <Mail className="absolute left-3 top-10 w-5 h-5 text-gray-400" />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={credentials.email}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 ps-10 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* PASSWORD */}
        <div className="relative mb-6">
          <label
            className="text-gray-700 text-sm font-medium"
            htmlFor="password"
          >
            Password
          </label>

          <Lock className="absolute left-3 top-10 w-5 h-5 text-gray-400" />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={credentials.password}
            onChange={onChange}
            minLength={8}
            required
            className="w-full border border-gray-300 rounded-lg p-2 ps-10 focus:ring-2 focus:ring-blue-600 outline-none"
          />

          <p className="text-xs text-gray-500 mt-1">
            At least 8 characters recommended
          </p>
        </div>

        {/* CONFIRM PASSWORD */}
        <div className="relative mb-6">
          <label
            className="text-gray-700 text-sm font-medium"
            htmlFor="cpassword"
          >
            Confirm Password
          </label>

          <Lock className="absolute left-3 top-10 w-5 h-5 text-gray-400" />

          <input
            type="password"
            id="cpassword"
            name="cpassword"
            placeholder="••••••••"
            value={credentials.cpassword}
            minLength={8}
            required
            onChange={onChange}
            className="w-full border border-gray-300 rounded-lg p-2 ps-10 focus:ring-2 focus:ring-blue-600 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-lg py-2 flex justify-center items-center gap-2 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </form>
    </div>
  );
};

export default Signup;
