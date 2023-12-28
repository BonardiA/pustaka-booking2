import React, { useState } from "react";
import HeaderBooking from "../components/HeaderBooking";
import Footer from "../components/Footer";

function DataBooking() {
  // State untuk menyimpan nilai pencarian
  const [searchTerm, setSearchTerm] = useState("");

  // Data booking
  const bookingData = [
    {
      id: 1,
      name: "Dede Miftahul R",
      bookTitle: "Laskar Pelangi",
      bookingDate: "28 Desember 2023",
      returnDate: "30 Desember 2023",
      status: "Di Proses",
    },
    {
      id: 2,
      name: "Dede Inoen",
      bookTitle: "172 Days",
      bookingDate: "28 Desember 2023",
      returnDate: "1 Januari 2024",
      status: "Di Pinjam",
    },
    {
      id: 3,
      name: "Warso Jago",
      bookTitle: "Hujan",
      bookingDate: "28 Desember 2023",
      returnDate: "5 Januari 2024",
      status: "Selesai",
    },
    // Data booking lainnya...
  ];

  // Fungsi untuk melakukan filter berdasarkan nilai pencarian
  const filteredData = bookingData.filter((booking) =>
    booking.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <HeaderBooking />
      <div className="h-[100vh] flex flex-col items-center justify-center">
        <div className="text-xl font-bold">Data Pinjam Buku Saya</div>
        <div>
          <div className="mt-5">
            {/* Input pencarian */}
            <input
              type="search"
              placeholder="Search"
              className="border rounded-xl border-gray-700 pl-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Tabel data booking */}
            <table className="w-full mt-6 border border-gray-500 overflow-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs sticky top-0 z-20 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Anggota
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Judul Buku
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Booking
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Kembali
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Baris data booking yang difilter */}
                {filteredData.map((booking) => (
                  <tr
                    key={booking.id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {booking.name}
                    </th>
                    <td className="px-6 py-4">{booking.bookTitle}</td>
                    <td className="px-6 py-4">{booking.bookingDate}</td>
                    <td className="px-6 py-4">{booking.returnDate}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded ${
                          booking.status === "Di Proses"
                            ? "bg-yellow-200"
                            : booking.status === "Di Pinjam"
                            ? "bg-blue-200"
                            : booking.status === "Selesai"
                            ? "bg-green-200"
                            : ""
                        }`}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DataBooking;
