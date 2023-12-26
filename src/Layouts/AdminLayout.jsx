import React from "react";
import HeaderAdmin from "../components/HeaderAdmin";
import { Route, Routes } from "react-router-dom";
import DashboardAdmin from "../Pages/DashboardAdmin";
import BukuAdmin from "../Pages/BukuAdmin";
import ContentAdmin from "../components/ContentAdmin";
import SidebarAdmin from "../components/SidebarAdmin";
import AnggotaAdmin from "../Pages/AnggotaAdmin";
import PinjamAdmin from "../Pages/PinjamAdmin";

function AdminLayout() {
  return (
    <div>
      <div>
        <HeaderAdmin />
        <SidebarAdmin />
        <ContentAdmin>
          <Routes>
            <Route path="/" element={<DashboardAdmin />} />
            <Route path="/anggota" element={<AnggotaAdmin />} />
            <Route path="/buku" element={<BukuAdmin />} />
            <Route path="/pinjam" element={<PinjamAdmin />} />
          </Routes>
        </ContentAdmin>
      </div>
    </div>
  );
}

export default AdminLayout;
