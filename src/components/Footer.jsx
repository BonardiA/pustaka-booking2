import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-blue-700 flex justify-around p-10 text-white">
        <div className=" w-72">
          <div className="text-2xl font-bold">
            Pustaka <span className="text-blue-300">Booking</span>
          </div>
          <div>
            Jl.Soekarno Hatta No.10, 40225 <br /> Kota Bandung, Jawa Barat,
            Indonesia
          </div>
        </div>
        <div>
          <div className="font-bold text-xl text-blue-300">Features</div>
          <div>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Buku</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl text-blue-300">Butuh Bantuan?</div>
          <div>
            <p>Hubungi : 085427653456</p>
            <p>Email : perpustakaanbooking@gmail.com</p>
          </div>
        </div>
        <div>
          <div className="font-bold text-xl text-blue-300">Follow Us</div>
        </div>
      </div>
      <div className="bg-blue-700 text-center text-white font-semibold">
        2023 Perpustakaan Booking. All Right Reserved
      </div>
    </>
  );
}

export default Footer;
