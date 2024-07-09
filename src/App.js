import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faShoppingCart, faBell } from "@fortawesome/free-solid-svg-icons";
import Second from "./components/Second";
import Third from "./components/Third";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50">
      <header className="w-full bg-white shadow p-4 flex justify-between items-center">
        <img src="https://hobbycue.com/_next/static/media/logo-full.13d59baf.svg" alt="hobbycue logo" className="h-10" />
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-purple-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <nav className="hidden md:flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search for anything on your hobbies"
            className="p-2 border rounded-lg focus:outline-none"
          />
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faSave} className="text-purple-600 h-5 w-5" />
            <FontAwesomeIcon icon={faShoppingCart} className="text-purple-600 h-5 w-5" />
            <FontAwesomeIcon icon={faBell} className="text-purple-600 h-5 w-5" />
          </div>
          <button className="p-2 bg-purple-600 text-white rounded-lg">
            Explore
          </button>
          <button className="p-2 bg-purple-600 text-white rounded-lg">
            Hobbies
          </button>
          <button className="p-2 bg-purple-600 text-white rounded-lg">
            Sign In
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="flex flex-col items-center space-y-4 p-4">
            <input
              type="text"
              placeholder="Search for anything on your hobbies"
              className="p-2 border rounded-lg focus:outline-none"
            />
            <div className="flex space-x-4">
              <FontAwesomeIcon icon={faSave} className="text-purple-600 h-5 w-5" />
              <FontAwesomeIcon icon={faShoppingCart} className="text-purple-600 h-5 w-5" />
              <FontAwesomeIcon icon={faBell} className="text-purple-600 h-5 w-5" />
            </div>
            <button className="p-2 bg-purple-600 text-white rounded-lg">
              Explore
            </button>
            <button className="p-2 bg-purple-600 text-white rounded-lg">
              Hobbies
            </button>
            <button className="p-2 bg-purple-600 text-white rounded-lg">
              Sign In
            </button>
          </nav>
        </div>
      )}

      <main className="flex-grow w-full grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center p-6">
        <div>
          <h1 className="text-4xl font-bold mt-8">
            Explore your <span className="text-blue-500">hobby</span> or{" "}
            <span className="text-purple-500">passion</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities...
          </p>
          <p className="mt-4 max-w-2xl mx-auto">
            If you are an expert or a seller, you can Add your Listing and promote
            yourself, your students, products, services or events. Hop on your
            hobbyhorse and enjoy the ride.
          </p>
          <img src="https://hobbycue.com/_next/static/media/landing-illustration.36d12f2d.svg" alt="hobbies" className="my-8 w-full max-w-lg mx-auto" />
        </div>
        <div className="flex flex-col items-center bg-white shadow-md p-6 rounded-lg max-w-md w-full mx-auto">
          <h2 className="text-xl font-semibold mb-4">Sign In</h2>
          <button className="w-full p-2 mb-2 bg-red-500 text-white rounded-lg">
            Continue with Google
          </button>
          <button className="w-full p-2 mb-2 bg-blue-600 text-white rounded-lg">
            Continue with Facebook
          </button>
          <p className="my-2">Or Sign In with</p>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 border rounded-lg"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 mb-2 border rounded-lg"
          />
          <div className="flex justify-between w-full mb-2">
            <label className="flex items-center space-x-2">
              <input type="checkbox" />
              <span>Remember Me</span>
            </label>
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>
          <button className="w-full p-2 bg-purple-600 text-white rounded-lg">
            Continue
          </button>
        </div>
      </main>
      <Second className="mt-10" />
      <Third className="mt-10" />
      <Testimonials className="mt-10" /> 
      <LandingPage className="mt-10" />
      <Footer className="mt-10"/>
    </div>
  );
};

export default App;
