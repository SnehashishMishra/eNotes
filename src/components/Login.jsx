import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Loader2 } from "lucide-react";

const Login = ({ showAlert }) => {
  const host = import.meta.env.VITE_HOST;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
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

    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });

    const json = await response.json();
    setIsLoading(false);

    if (json.success) {
      localStorage.setItem("token", json.authToken);
      showAlert("Signed In", "success");
      navigate("/home", { replace: true });
    } else {
      showAlert("Invalid credentials", "danger");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-[70vh] p-4 bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white border rounded-3xl shadow-lg p-8 w-full max-w-sm"
      >
        <h3 className="text-center font-bold text-2xl mb-6">
          Login to continue
        </h3>

        {/* Email */}
        <div className="relative mt-6 mb-4">
          <label htmlFor="email" className="text-gray-700 text-sm font-medium">
            Email Address
          </label>

          <Mail className="absolute text-gray-400 left-3 top-10 w-5 h-5" />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            value={credentials.email}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 ps-10 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>

        {/* Password */}
        <div className="relative mt-6 mb-6">
          <label
            htmlFor="password"
            className="text-gray-700 text-sm font-medium"
          >
            Password
          </label>

          <Lock className="absolute text-gray-400 left-3 top-10 w-5 h-5" />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            value={credentials.password}
            onChange={onChange}
            required
            className="w-full border border-gray-300 rounded-lg p-2 ps-10 focus:ring-2 focus:ring-blue-600 focus:outline-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-4 text-white bg-gray-900 hover:bg-gray-800 py-2 rounded-lg flex justify-center items-center gap-2 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin w-5 h-5" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
