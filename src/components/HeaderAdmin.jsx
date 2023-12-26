import { User } from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {
  return (
    <div className="bg-white shadow-lg px-5 items-center py-2 absolute top-0 z-50 w-full flex justify-between">
      <div className="text-3xl font-bold">
        Pustaka <span className="text-blue-700">Booking</span>
      </div>
      <div className="flex gap-2">
        <div className="w-10 h-10 rounded-full bg-blue-400 flex justify-center items-center">
          <User size={20} />
        </div>
        <div>
          <div className="font-bold">Admin</div>
          <NavLink to="/login">
            <div>Logout</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
