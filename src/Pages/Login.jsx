import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../public/login.svg";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate(); // Get the navigate function
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Check if the entered username and password match the predefined credentials
    if (username === "admin@gmail.com" && password === "admin123") {
      // Redirect to the "/admin" path upon successful login
      navigate("/admin");
      toast.success("Berhasil login !");
    } else {
      // Display an error message or handle authentication failure
      toast.error("Username atau Password salah ! ");
    }
  };

  return (
    <>
      <Toaster />
      <section className="bg-white w-full md:px-28">
        <div className="grid w-full max-w-full py-8 mx-auto gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-6 w-full mb-10">
            <form className="w-full max-w-full px-10 md:px-20">
              <h1 className="max-w-2xl text-blue-700 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-3xl">
                Welcome!
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl">
                Please login to your account
              </p>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mb-5 bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full px-5 py-3"
                placeholder="Username"
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-5 bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full px-5 py-3"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={handleLogin}
                className="text-white bg-gradient-to-r from-indigo-700 via-purple-400 to-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-2xl px-5 py-2.5 w-full"
              >
                Login
              </button>
              <div className="py-5 font-normal text-gray-700">
                Don’t have an account?{" "}
                <Link to="/register" className="text-blue-700 font-bold">
                  Sign up
                </Link>
              </div>
            </form>
          </div>
          <div className="order-first md:order-last md:col-span-6 px-10 pt-5 pb-7">
            <img src={Image} alt="image" className="w-auto h-auto" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
