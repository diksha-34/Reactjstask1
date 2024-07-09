// components/Footer.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest, faLinkedin, faYoutube, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4">
        <div>
          <h4 className="text-lg font-semibold mb-4">HobbyCue</h4>
          <ul>
            <li className="mb-2">About Us</li>
            <li className="mb-2">Our Services</li>
            <li className="mb-2">Work with Us</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">How do I</h4>
          <ul>
            <li className="mb-2">Sign Up</li>
            <li className="mb-2">Add a Listing</li>
            <li className="mb-2">Claim Listing</li>
            <li className="mb-2">Post a Query</li>
            <li className="mb-2">Add a Blog Post</li>
            <li className="mb-2">Other Queries</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li className="mb-2">Listing Pages</li>
            <li className="mb-2">Blog Posts</li>
            <li className="mb-2">Shop / Store</li>
            <li className="mb-2">Community</li>
            <li className="mb-2">Sitemap</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Invite Friends</h4>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email ID"
              className="p-2 border rounded-l-lg focus:outline-none flex-grow"
            />
            <button className="p-2 bg-purple-600 text-white rounded-r-lg">
              Invite
            </button>
          </div>
          <h4 className="text-lg font-semibold mb-4">Social Media</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faFacebook} className="text-xl" />
            </a>
            <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faTwitter} className="text-xl" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
            <a href="#" aria-label="Pinterest" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faPinterest} className="text-xl" />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
            </a>
            <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faYoutube} className="text-xl" />
            </a>
            <a href="#" aria-label="Telegram" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faTelegram} className="text-xl" />
            </a>
            <a href="#" aria-label="Email" className="text-gray-600 hover:text-gray-900">
              <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        © Purple Cues Private Limited
      </div>
    </footer>
  );
};

export default Footer;
