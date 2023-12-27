import Image from "../../public/home.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import { IMAGES } from "../data/constant";
const LandingPage = () => {
  return (
    <>
      <Header />
      <section id="home" className="bg-white w-full md:px-28 py-24">
        <div className="grid w-full max-w-full py-8 mx-auto gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto  w-11/12 place-self-center md:col-span-6  mb-10 px-10">
            <div className="text-6xl font-bold text-gray-800">
              Temukan buku favoritmu
              <span className="text-sky-500"> Sekarang!</span>
            </div>
            <p className="my-5 mb-10">Rasakan pengalaman membaca yang nyaman</p>
            <Link
              to="/login"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign Up
            </Link>
          </div>
          <div className="order-first md:order-last md:col-span-6 px-10 pt-5 pb-7">
            <img
              src={IMAGES.hero}
              alt="image"
              className="w-auto h-auto"
              width={800}
            />
          </div>
        </div>
      </section>
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
