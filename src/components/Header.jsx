import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="flex justify-between p-4 border fixed w-full items-center bg-white">
      <div className="text-2xl font-bold">
        Pustaka <span className="text-blue-700">Booking</span>
      </div>
      <div>
        <ul className="flex gap-10 text-lg font-semibold">
          <Link to="home" smooth={true}>
            <li className="hover:text-sky-500">Home</li>
          </Link>
          <Link to="about" smooth={true}>
            <li className="hover:text-sky-500">About</li>
          </Link>
          <Link to="buku" smooth={true}>
            <li className="hover:text-sky-500">Buku</li>
          </Link>
          <Link to="contact" smooth={true}>
            <li className="hover:text-sky-500">Contact</li>
          </Link>
        </ul>
      </div>
      <div className="flex gap-5">
        <NavLink to="/login">
          <button className=" w-20 border-2 hover:bg-sky-700 hover:text-white p-2 rounded-md border-blue-700 text-blue-700">
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="w-20 border-2 p-2 hover:bg-sky-700 rounded-md bg-blue-700 text-white">
            Sign Up
          </button>
        </NavLink>
      </div>
    </div>
  );
}
