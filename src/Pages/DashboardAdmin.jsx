import {
  Book,
  Gauge,
  HardDrive,
  HardDrives,
  User,
} from "@phosphor-icons/react";
import React from "react";

function DashboardAdmin() {
  return (
    <div className="flex gap-10 flex-col justify-center min-h-[200px]">
      <div className="text-xl font-bold "> Dashboard Admin</div>
      <div className="flex gap-5 items-center justify-center">
        <div className="p-5 h-28 bg-blue-200 w-60 rounded-md flex justify-around items-center">
          <div>
            <div>Dashboard</div>
            <div>99</div>
          </div>
          <div>
            <Gauge size={35} />
          </div>
        </div>
        <div className="p-5 h-28 bg-yellow-200 w-60 rounded-md flex justify-around items-center">
          <div>
            <div>Data Anggota</div>
            <div>99</div>
          </div>
          <div>
            <User size={35} />
          </div>
        </div>
        <div className="p-5 h-28 bg-green-200 w-60 rounded-md flex justify-around items-center">
          <div>
            <div>Data Buku</div>
            <div>99</div>
          </div>
          <div>
            <Book size={35} />
          </div>
        </div>
        <div className="p-5 h-28 bg-red-200 w-60 rounded-md flex justify-around items-center">
          <div>
            <div>Data Pinjam</div>
            <div>99</div>
          </div>
          <div>
            <HardDrives size={35} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
