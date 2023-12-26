import React from "react";

export default function Contact() {
  return (
    <div id="contact" className="flex justify-center gap-10 mb-20">
      <div className="border-gray-400 border flex rounded-xl">
        <div className="w-[600px] p-10">
          <div className="mb-5 font-bold text-3xl text-blue-500">
            Send Us A Message
          </div>
          <div>
            <form action="" className="flex flex-col">
              <label htmlFor="">Your Name</label>
              <input
                className="border mb-5 border-gray-400 h-9 rounded-lg pl-3"
                type="text"
                placeholder="Input Your Name"
              />

              <label htmlFor="">Email</label>
              <input
                className="border mb-5 border-gray-400 h-9 rounded-lg pl-3"
                type="text"
                placeholder="Input Your Email"
              />

              <label htmlFor="">Your Phone</label>
              <input
                className="border mb-5 border-gray-400 h-9 rounded-lg pl-3"
                type="text"
                placeholder="Input Your Phone"
              />

              <label htmlFor="">Message</label>
              <textarea
                className="border mb-5 h-40 border-gray-400 rounded-lg pl-3"
                placeholder="Input Your Message"
              ></textarea>
              <button className=" w-20 border-2 hover:bg-sky-700 hover:text-black p-2 rounded-md order-gray-400">
                Kirim
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col  mb-10 w-[400px] bg-blue-700 p-10">
          <div className="mb-10 text-blue-200 text-3xl font-bold">
            Contact Information
          </div>
          <div className="text-white">
            <p className="mb-10">
              Jl.Soekarno Hatta No.10, 40225 <br /> Kota Bandung, Jawa Barat,
              Indonesia
            </p>
            <p className="mb-10">085427653456</p>
            <p className="mb-10">perpustakaanbooking@gmail.com</p>
          </div>
          <div className="text-3xl text-blue-200 font-bold">Terima Kasih</div>
        </div>
      </div>
    </div>
  );
}
