import { Book, Gauge, HardDrives, SignOut, User } from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

function SidebarAdmin() {
  return (
    <div className=" border shadow-xl absolute top-0 h-[100vh]  pt-24 px-5 w-[250px] ">
      <div className="flex items-center flex-col">
        <div className=" w-32 h-32 rounded-full flex justify-center items-center bg-blue-400">
          <User size={80} />
        </div>
        <div className="text-center mt-2 font-bold text-xl">Admin</div>
      </div>
      <div className="pt-5 float-left">
        <div className=" flex items-center mb-5 gap-3">
          <div>
            <Gauge size={20} />
          </div>
          <NavLink to="/admin">
            <div className="text-lg">Dashboard</div>
          </NavLink>
        </div>
        <div className=" flex items-center mb-5 gap-3">
          <div>
            <User size={20} />
          </div>
          <NavLink to="/admin/anggota">
            <div className="text-lg">Data Anggota</div>
          </NavLink>
        </div>
        <div className=" flex items-center mb-5 gap-3">
          <div>
            <Book size={20} />
          </div>
          <NavLink to="/admin/buku">
            <div className="text-lg">Data Buku</div>
          </NavLink>
        </div>
        <div className=" flex items-center mb-5 gap-3">
          <div>
            <HardDrives size={20} />
          </div>
          <NavLink to="/admin/pinjam">
            <div className="text-lg">Data Pinjam</div>
          </NavLink>
        </div>
        <div className=" flex items-center mb-5 gap-3">
          <div>
            <SignOut size={20} />
          </div>
          <NavLink to="/login">
            <div className="text-lg">Sign Out</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SidebarAdmin;
