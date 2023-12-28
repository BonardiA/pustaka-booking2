import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <div className="flex justify-between px-40 p-4 border fixed w-full items-center bg-white">
      <div className="text-2xl font-bold">
        Pustaka <span className="text-blue-700">Booking</span>
      </div>
      <div>
        <ul className="flex gap-10 text-lg font-semibold cursor-pointer">
          <Link to="home" smooth={true}>
            <li className="hover:text-sky-500">Home</li>
          </Link>
          <Link to="about" smooth={true}>
            <li className="hover:text-sky-500">About</li>
          </Link>
          <NavLink to="/buku" smooth={true}>
            <li className="hover:text-sky-500">Buku</li>
          </NavLink>
          <NavLink to="/data-booking" smooth={true}>
            <li className="hover:text-sky-500">Booking Saya</li>
          </NavLink>
          <Link to="contact" smooth={true}>
            <li className="hover:text-sky-500">Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
