import { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalStates } from "../context";

export default function Login() {
  const { SERVER_ADDRESS } = GlobalStates();

  const [state, setState] = useState({ email: "", password: "" });

  const login = async () => {
    const res = await fetch(`${SERVER_ADDRESS}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(state),
    });

    const data = await res.json();

    if (data.success) {
      localStorage.setItem("authtoken", data.authtoken);
      location.reload();
    } else alert(data.message);
  };

  return (
    <div id="login" className="min-h-screen flex items-center justify-center">
      <div className="border bg-white rounded-md shadow-md flex items-center justify-center flex-col space-y-8 px-10 py-10">
        <h1 className="text-2xl">Login</h1>

        <div>
          <i className="fa-solid fa-envelope"></i>
          <input
            value={state.email}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            type="email"
            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none"
            placeholder="Type your email"
            name="email"
          />
        </div>

        <div>
          <i className="fa-solid fa-lock"></i>
          <input
            value={state.password}
            onChange={(e) =>
              setState({ ...state, [e.target.name]: e.target.value })
            }
            type="password"
            className="transition delay-200 focus:border-b-pink-500 border-b-2 border-b-gray-200 text-sm pl-3 h-10 w-60 focus:!outline-none"
            placeholder="Type your password"
            name="password"
          />
        </div>

        <div className="w-full">
          <button
            className="bg-pink-600 hover:bg-pink-500 rounded-md p-2 text-white font-medium w-full"
            onClick={login}
          >
            Login
          </button>
        </div>

        <p className="text-sm">
          <span className="text-gray-500">Don't have an account?</span>
          <Link
            className="pl-4 underline text-blue-400 hover:text-blue-600"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
