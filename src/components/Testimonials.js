import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faPlayCircle } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="w-full px-2 md:px-10 py-6">
      <div className="bg-purple-50 shadow-md p-6 rounded-lg flex flex-col items-start border border-gray-200 mx-2 md:mx-10">
        <div className="flex items-center mb-4">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-purple-600 h-6 w-6 mr-2" />
          <h3 className="text-xl font-semibold">Testimonials</h3>
        </div>
        <p className="mb-4">
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like-minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="flex items-center w-full">
          <button className="p-2 bg-purple-600 text-white rounded-full flex items-center">
            <FontAwesomeIcon icon={faPlayCircle} className="h-6 w-6 mr-2" />
            Play
          </button>
        </div>
        <div className="flex items-center mt-4">
          <img src="https://via.placeholder.com/50" alt="Shubha Nagarajan" className="rounded-full h-10 w-10 mr-4" />
          <div>
            <h4 className="font-semibold">Shubha Nagarajan</h4>
            <p className="text-purple-600">Classical Dancer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
