import Image from "../../public/register.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  {
    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    });

    // const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = async (e) => {
    //   e.preventDefault();

    //   try {
    //     const response = await axios.post("/api/register", formData);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
  }

  return (
    <section className="bg-white w-full md:px-28">
      <div className="grid w-full max-w-full py-8 mx-auto gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center md:col-span-6 w-full mb-10">
          <form className="w-full max-w-full px-10 md:px-20">
            <h1 className="pb-3 max-w-2xl text-gray-900 mb-4 text-3xl font-normal tracking-tight leading-none md:text-3xl xl:text-3xl">
              Sign up to | Perpus{" "}
              <span className="text-blue-700"> Booking</span>
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  class="mb-5 bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full px-5 py-3"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  class="mb-5 bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full px-5 py-3"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              class="mb-5 bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full px-5 py-3"
              placeholder="Email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              class="mb-5 bg-gray-50 border border-purple-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full px-5 py-3"
              placeholder="Password"
              required
            />
            <div className="pl-4 pr-3 pb-4">
              <input
                type="checkbox"
                name=""
                id=""
                className="w-4 h-4"
                required
              />
              <span className="font-xs text-gray-600">
                {" "}
                I agree to Perpus Booking’s Terms and Service, Privacy Policy,
                and Notification Settings.
              </span>
            </div>
            <button
              type="button"
              //   onClick={handleSubmit}
              className="text-white bg-gradient-to-r from-indigo-700 via-purple-400 to-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-2xl px-5 py-2.5 w-full"
            >
              Sign Up
            </button>
            <div className="py-5 font-normal text-gray-700">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-700 font-bold">
                Sign in
              </Link>
            </div>
          </form>
        </div>
        <div className="order-first md:order-last md:col-span-6 px-10 pt-5 pb-7">
          <img src={Image} alt="image" className="w-auto h-auto" />
        </div>
      </div>
    </section>
  );
};

export default Register;
