import React from "react";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    emailjs
      .send(
        "service_d6p1ff9",
        "template_8aelg8c",
        templateParams,
        "IKKKOCYh0ZsysEIAM"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Berhasil Mengirim Pesan !");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="flex justify-center flex-col items-center gap-10 mb-20 mt-20"
    >
      <Toaster />
      <div className="mb-5 font-bold text-3xl text-blue-500">CONTACT US</div>
      <div className="border-gray-400 border flex rounded-xl">
        <div className="w-[600px] p-10">
          <div className="mb-5 font-bold text-3xl text-blue-500">
            Send Us A Message
          </div>
          <div>
            <form onSubmit={sendEmail} className="flex flex-col">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                className="border mb-5 border-gray-400 h-9 rounded-lg pl-3"
                type="text"
                placeholder="Input Your Name"
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                className="border mb-5 border-gray-400 h-9 rounded-lg pl-3"
                type="text"
                placeholder="Input Your Email"
              />

              <label htmlFor="phone">Your Phone</label>
              <input
                id="phone"
                name="phone"
                className="border mb-5 border-gray-400 h-9 rounded-lg pl-3"
                type="text"
                placeholder="Input Your Phone"
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="border mb-5 h-40 border-gray-400 rounded-lg pl-3"
                placeholder="Input Your Message"
              ></textarea>
              <button
                type="submit"
                className="w-20 border-2 hover:bg-sky-700 hover:text-black p-2 rounded-md order-gray-400"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col  rounded-e-xl w-[400px] bg-blue-700 p-10">
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
