import React, { useState } from "react";
import HeaderBooking from "../components/HeaderBooking";
import Footer from "../components/Footer";
import { DATA_BUKU } from "../data/constant";
import toast, { ToastBar, Toaster } from "react-hot-toast";

function Buku() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    tanggalPemesanan: "",
    tanggalPengembalian: "",
  });
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const openModal = (book) => {
    setSelectedBook(book);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedBook(null);
    setBookingDetails({
      tanggalPemesanan: "",
      tanggalPengembalian: "",
    });
  };

  const handleBooking = () => {
    // Add your booking logic here
    // You can use the selectedBook and bookingDetails state to handle the booking
    console.log("Booking details:", bookingDetails);
    closeModal();
    toast.success("Berhasil booking buku!");
  };

  const filteredBooks = DATA_BUKU.filter((item) =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <HeaderBooking />
      <Toaster />
      <div className=" mb-10 flex flex-col pt-20 justify-center items-center">
        <div>
          <div className="mt-10 mb-10 font-bold text-2xl">Booking Buku</div>
        </div>
        <div className="mb-10 text-lg">
          Cari Buku :{" "}
          <input
            type="search"
            placeholder="search"
            className="border rounded-lg px-2 border-gray-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-5 flex-wrap items-center justify-center">
          {filteredBooks.map((item) => (
            <div key={item.id} className="rounded shadow-lg border w-72">
              <img
                className="w-full"
                src={item.image}
                alt="cover book"
                width={200}
              />
              <div>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.judul}</div>
                  <p className="text-gray-700 text-base">{item.pengarang}</p>
                  <div className="float float-right mb-5">
                    <button
                      className="bg-blue-700 text-white p-2 rounded"
                      onClick={() => openModal(item)}
                    >
                      Booking
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">
              Booking Details - {selectedBook?.judul}
            </h2>
            <label className="block mb-2">Tanggal Pemesanan:</label>
            <input
              type="date"
              className="border p-2 mb-4 w-full"
              value={bookingDetails.tanggalPemesanan}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  tanggalPemesanan: e.target.value,
                })
              }
            />
            <label className="block mb-2">Tanggal Pengembalian:</label>
            <input
              type="date"
              className="border p-2 mb-4 w-full"
              value={bookingDetails.tanggalPengembalian}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  tanggalPengembalian: e.target.value,
                })
              }
            />
            <div className="flex justify-end">
              <button
                className="bg-blue-700 text-white p-2 rounded"
                onClick={handleBooking}
              >
                Book Now
              </button>
              <button className="ml-2 text-gray-600" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Buku;
