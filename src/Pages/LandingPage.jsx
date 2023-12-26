import Image from "../../public/home.png";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
const LandingPage = () => {
  return (
    <>
      <Header />
      <section id="home" className="bg-white w-full md:px-28">
        <div className="grid w-full max-w-full py-8 mx-auto gap-4 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center md:col-span-6 w-full mb-10 px-10">
            <p className="max-w-2xl font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl">
              Selamat Datang
            </p>
            <h1 className="max-w-2xl text-gray-800 mb-4 text-4xl font-normal tracking-tight leading-none md:text-5xl xl:text-3xl">
              Jelajahi dunia literasi <br />
              dengan mudah <br />
              <span className="text-[#D34FE5]">
                Temukan buku <br />
                favoritmu sekarang!
              </span>
            </h1>
            <p className="max-w-2xl mb-2 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl">
              Rasakan pengalaman membaca yang nyaman
            </p>
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
            <img src={Image} alt="image" className="w-auto h-auto" />
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
