import React from "react";
import { NavLink } from "react-router-dom";

function HeaderBooking() {
  return (
    <div className="flex justify-between p-4 border fixed w-full items-center bg-white">
      <div className="text-2xl font-bold">
        Pustaka <span className="text-blue-700">Booking</span>
      </div>
      <div>
        <NavLink to="/">
          <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800">
            Back
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default HeaderBooking;
